"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function BannerPlanning() {
  const [banner, setBanner] = useState<string | null>(null);
  useEffect(() => {
    console.log('BannerPlanning: fetching /api/twitch-banner');
    fetch("/api/twitch-banner")
      .then((res) => {
        console.log('BannerPlanning: response status', res.status);
        return res.json();
      })
      .then((data) => {
        console.log('BannerPlanning: data', data);
        setBanner(data.banner ?? null);
      })
      .catch((err) => {
        console.error('BannerPlanning: fetch error', err);
      });
  }, []);
  if (!banner) return <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />;
  return (
  <Image src={banner} alt="Planning Twitch" width={800} height={400} className="rounded-lg w-full h-full object-contain" />
  );
}
