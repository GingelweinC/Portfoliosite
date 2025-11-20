"use client";
import React, { useEffect, useState } from 'react';

type Vod = {
  id: string;
  title: string;
  url: string;
  thumbnail_url: string;
};

export default function VodList() {
  const [vods, setVods] = useState<Vod[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVods() {
      try {
        const res = await fetch(`/api/youtube-vod?limit=3`);
        const data = await res.json();
        setVods(data.vods || []);
      } catch {
        setVods([]);
      } finally {
        setLoading(false);
      }
    }
    fetchVods();
  }, []);

  return (
    <>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full mb-8">
        {loading && <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg col-span-3" />}
        {!loading && vods.length === 0 && <div className="text-center text-gray-500 col-span-3">Aucune VOD trouvée.</div>}
        {vods.map(vod => (
          <div key={vod.id} className="flex flex-col items-center gap-4 bg-white/80 rounded-lg p-6 shadow-lg">
            <div className="w-full mb-4 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${vod.id}`}
                title={vod.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-full"
                style={{ aspectRatio: '16/9' }}
              ></iframe>
            </div>
            <a
              href={vod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-center text-2xl bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent transition duration-200 cursor-pointer block hover:from-[#3ABEFF] hover:to-[#FF92C9]"
            >
              {vod.title}
            </a>
          </div>
        ))}
      </div>
      
    </>
  );
}