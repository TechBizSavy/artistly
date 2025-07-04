import React from 'react';
import ArtistGallery from '@/app/components/ArtistGallery';

export default function ArtistPage() {
  return (
    <main className="bg-black flex justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl flex justify-center font-bold text-white mb-6">Discover Artists</h1>
        <ArtistGallery />
      </div>
    </main>
  );
}
