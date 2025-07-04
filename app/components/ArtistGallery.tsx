'use client';

import React, { useState } from 'react';
import ArtistCard from '@/app/components/ArtistCard';

const artists = [
  {
    id: 1,
    name: 'Arijit Singh',
    category: ['Singer'],
    bio: 'Renowned Indian playback singer known for his soulful voice.',
    priceRange: '₹50,000 - ₹1,00,000',
    location: 'India',
    languages: ['Hindi', 'Bengali', 'English'],
    image: '/i17.jpg',
    rating: 4.9,
    reviewCount: 1200,
    featured: true,
  },
  {
    id: 2,
    name: 'Justin Bieber',
    category: ['Pop Artist'],
    bio: 'Canadian pop star famous for global chart-toppers.',
    priceRange: '$500,000 - $1,000,000',
    location: 'Canada',
    languages: ['English'],
    image: '/i4.jpg',
    rating: 4.7,
    reviewCount: 890,
    featured: true,
  },
  {
    id: 3,
    name: 'DJ Chetna',
    category: ['DJ'],
    bio: 'India’s top female DJ spinning Bollywood and EDM.',
    priceRange: '₹1,00,000 - ₹3,00,000',
    location: 'India',
    languages: ['Hindi', 'English'],
    image: '/img12.jpg',
    rating: 4.6,
    reviewCount: 310,
    featured: false,
  },

  {
    id: 4,
    name: 'The Bombay Band',
    category: ['Band'],
    bio: 'Live music band for weddings and corporate gigs.',
    priceRange: '₹80,000 - ₹2,00,000',
    location: 'Mumbai, India',
    languages: ['Hindi', 'English'],
    image: '/i1.jpg',
    rating: 4.8,
    reviewCount: 500,
    featured: false,
  },


];

export default function ArtistGallery() {
  const [search, setSearch] = useState('');

  const filtered = artists.filter((artist) =>
    artist.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-8 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search for artists (e.g., Arijit, DJ...)"
          className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.length > 0 ? (
          filtered.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <div className="text-center col-span-full text-gray-500">No artists found.</div>
        )}
      </div>
    </div>
  );
}
