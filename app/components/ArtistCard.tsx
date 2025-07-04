'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Star, DollarSign } from 'lucide-react';
import { Button } from '@/app/ui/button';
import { Badge } from '@/app/ui/badge';

interface Artist {
  id: number;
  name: string;
  category: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  image: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  calLink?: string;
}

interface ArtistCardProps {
  artist: Artist;
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const [loading, setLoading] = useState(false);

  const handleRazorpayPayment = async () => {
    setLoading(true);
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!key) {
      alert("Missing Razorpay Key. Set NEXT_PUBLIC_RAZORPAY_KEY_ID in .env.local");
      setLoading(false);
      return;
    }

    const rawPrice = artist.priceRange.replace(/[^\d]/g, '');
    const amount = parseInt(rawPrice) * 100 || 50000; // fallback ₹500

    const options = {
      key: key,
      amount,
      currency: 'INR',
      name: 'Book My Artist',
      description: `Booking ${artist.name}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handler: function (response: any) {
        alert(`✅ Payment Success!\nID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Harsh',
        email: 'harsh@example.com',
        contact: '9999999999',
      },
      notes: {
        artistId: artist.id,
        artistName: artist.name,
      },
      theme: {
        color: '#8b5cf6',
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="bg-[#0e0e0e] min-h-[550px] rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
      {artist.featured && (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium px-3 py-1 text-center">
          Featured Artist
        </div>
      )}

      <div className="relative overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-white">{artist.rating}</span>
          <span className="text-xs text-gray-300">({artist.reviewCount})</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{artist.name}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {artist.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs bg-purple-600 text-white">
                {cat}
              </Badge>
            ))}
          </div>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{artist.bio}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              {artist.location}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <DollarSign className="w-4 h-4 mr-2" />
              {artist.priceRange}
            </div>
            <div className="text-xs text-gray-500">
              Speaks: {artist.languages.slice(0, 2).join(', ')}
              {artist.languages.length > 2 && ` +${artist.languages.length - 2}`}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            size="sm"
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700"
            onClick={() => window.open(artist.calLink || 'https://cal.com/harsh-chalwadi-hayxg1', '_blank')}
          >
            Book a Call
          </Button>

          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
            onClick={handleRazorpayPayment}
            disabled={loading}
          >
            {loading ? "Processing..." : "Book the Artist"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
