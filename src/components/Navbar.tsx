"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useState as useBurgerState } from 'react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useBurgerState(false);
  const [isLive, setIsLive] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/twitch-live');
        const data = await res.json();
        setIsLive(!!data.live);
      } catch {
        setIsLive(false);
      }
    })();
  }, []);
  return (
     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] shadow-lg z-50 flex flex-wrap items-center px-2 sm:px-4 md:px-6 py-2 sm:py-3 backdrop-blur-md text-white">
  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 basis-1/5 min-w-[120px]">
        <Link href="/">
          <Image src="/Kat-Chan-logo.png" alt="Logo Katchanvt" width={160} height={60} priority className="h-10 sm:h-12 md:h-16 w-auto min-w-[80px] max-w-[160px] flex-shrink-0 cursor-pointer" />
        </Link>
      </div>
      {/* Mascots and logo */}
      <div className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-6 min-w-0">
        <Image src="/MascotteKCABleue.png" alt="Mascotte Bleue" width={40} height={40} className="drop-shadow-lg" />
        <Image src="/MascotteKCARose.png" alt="Mascotte Rose" width={40} height={40} className="drop-shadow-lg" />
      </div>
      
  {/* Desktop links */}
  <div className="hidden md:flex gap-2 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl font-semibold flex-1 min-w-0 justify-end flex-nowrap whitespace-nowrap ml-0">
    <Link href="/" className="hover:text-[#FF92C9] transition drop-shadow-lg">Accueil</Link>
    <div className="relative flex items-center">
      <Link href="/live" className="hover:text-[#FF92C9] transition drop-shadow-lg">Live</Link>
      {isLive && (
        <span className="ml-2 w-3 h-3 rounded-full bg-red-500 animate-pulse border border-white" title="En live" />
      )}
    </div>
    <Link href="/planning" className="hover:text-[#FF92C9] transition drop-shadow-lg">Planning</Link>
    <Link href="/clips" className="hover:text-[#FF92C9] transition drop-shadow-lg">Clips</Link>
    <Link href="/vod" className="hover:text-[#FF92C9] transition drop-shadow-lg">VOD</Link>
    <Link href="/about" className="hover:text-[#FF92C9] transition drop-shadow-lg">À propos</Link>
  </div>
  {/* Burger menu button for mobile */}
  <button className="md:hidden ml-auto flex items-center px-2 py-1" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
    <span className="block w-7 h-7">
      <span className="block w-full h-1 bg-white rounded mb-1"></span>
      <span className="block w-full h-1 bg-white rounded mb-1"></span>
      <span className="block w-full h-1 bg-white rounded"></span>
    </span>
  </button>
  {/* Mobile menu */}
  {menuOpen && (
  <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] shadow-lg z-50 flex flex-row items-center justify-center py-2 animate-fade-in gap-1 overflow-x-auto max-h-[56px]">
  <Link href="/" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>Accueil</Link>
  <Link href="/live" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>Live {isLive && <span className="ml-2 w-3 h-3 rounded-full bg-red-500 animate-pulse border border-white inline-block" title="En live" />}</Link>
  <Link href="/planning" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>Planning</Link>
  <Link href="/clips" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>Clips</Link>
  <Link href="/vod" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>VOD</Link>
  <Link href="/about" className="hover:text-[#FF92C9] transition drop-shadow-lg px-1 sm:px-2 md:px-2 py-2 text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg w-20 sm:w-24 md:w-32" onClick={() => setMenuOpen(false)}>À propos</Link>
    </div>
  )}
    </nav>
  );
}
