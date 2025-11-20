"use client";
import React, { useEffect, useState } from 'react';

type Clip = {
  id: string;
  title: string;
  url: string;
  thumbnail_url: string;
};

export default function ClipsList() {
  const [clips, setClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClips() {
      try {
  const res = await fetch(`/api/twitch-clips?user=katchanvt&limit=6`);
  const data = await res.json();
  console.log('Clips API response:', data);
  setClips(data.clips || []);
      } catch (e) {
        setClips([]);
      } finally { 
        setLoading(false);
      }
    }
    fetchClips();
  }, []);

  if (loading) return <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg" />;
  if (!clips.length) return <div className="text-center text-gray-500">Aucun clip trouvé.</div>;

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full px-2 sm:px-4 md:px-6 lg:px-8">
      {clips.map(clip => (
        <div key={clip.id} className="flex flex-col items-center gap-2 bg-white/80 rounded-lg p-2 sm:p-3 md:p-4 shadow-lg">
          <a href={clip.url} target="_blank" rel="noopener noreferrer">
            <img src={clip.thumbnail_url} alt={clip.title} className="rounded-lg w-full object-cover mb-2" />
          </a>
          <a
            href={clip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-center text-2xl bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent transition duration-200 cursor-pointer block hover:from-[#3ABEFF] hover:to-[#FF92C9]"
          >
            {clip.title}
          </a>
        </div>
      ))}
    </div>
  );
}
