"use client"

import { useState } from "react";

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <footer className="w-full fixed bottom-0 left-0 bg-gradient-to-r from-[#FF92C9]/30 via-[white]/30 to-[#3ABEFF]/30 backdrop-blur border-t border-gray-300 text-sm text-gray-900 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row flex-wrap items-center justify-between gap-2 sm:gap-4 py-2 sm:py-3">
        <button className="md:hidden ml-auto flex items-center px-2 py-1" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-7 h-7">
            <span className="block w-full h-1 bg-[#FF92C9] rounded mb-1"></span>
            <span className="block w-full h-1 bg-[#3ABEFF] rounded mb-1"></span>
            <span className="block w-full h-1 bg-[#FF92C9] rounded"></span>
          </span>
        </button>
        <div className={`w-full flex-col md:flex md:flex-row flex-wrap items-center justify-between gap-2 sm:gap-4 ${menuOpen ? 'flex' : 'hidden'} md:flex`}> 
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-[#3ABEFF]">Hébergeur&nbsp;:</span>
            <a href="https://vercel.com/" target="_blank" rel="noopener" className="footer-link text-[#FF92C9] font-semibold flex items-center gap-1">
              <img src="/vercel.svg" alt="Vercel" className="inline-block align-middle h-4 w-4" />
              Vercel
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-[#3ABEFF]">Contact&nbsp;:</span>
              <a href="mailto:katchancos@gmail.com" className="footer-link contact-link text-[#FF92C9] font-semibold flex items-center gap-1">
                <span className="inline-block align-middle">
                  <svg className="envelope-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor"/>
                    <polyline points="3,6 12,13 21,6" fill="none" stroke="#fff" strokeWidth="2" />
                  </svg>
                </span>
                katchancosplay@gmail.com
              </a>
          </div>
        
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <span className="font-bold text-[#3ABEFF]">License :</span>
            <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener" className="footer-link text-[#FF92C9] font-semibold">CC BY-NC 4.0</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          transition: color 0.2s, text-decoration 0.2s;
        }
        .footer-link:hover {
          color: #3ABEFF;
          text-decoration: underline solid;
        }
      `}</style>
      <style jsx>{`
        .footer-link {
          transition: color 0.2s, text-decoration 0.2s;
        }
        .footer-link:hover {
          color: #3ABEFF;
          text-decoration: underline solid;
        }
        .contact-link .envelope-svg {
          transition: color 0.2s;
          color: #FF92C9;
        }
        .contact-link:hover .envelope-svg {
          color: #3ABEFF;
        }
      `}</style>
    </footer>
  );
}



