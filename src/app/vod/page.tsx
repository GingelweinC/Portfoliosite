export const metadata = {
  title: "KatChanVT | VOD",
};

import VodList from '../../components/VodList';

const rotationStyle = (
  <style>{`
    .rotate-slow { animation: spin 30s linear infinite; }
    .rotate-reverse { animation: spin-reverse 30s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes spin-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
  `}</style>
);

export default function VodPage() {
  return (
    <>
      {rotationStyle}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
  <div className="w-full h-full bg-white/60" />
      </div>
      <main className="relative flex flex-row items-stretch justify-center p-0 overflow-hidden min-h-screen">
  <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full pt-20 sm:pt-32 md:pt-40 px-4 mx-auto">
          <a
            href="https://www.youtube.com/@katchanvtvod"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-bold mb-6 sm:mb-10 md:mb-12 mt-0 bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent text-center block cursor-pointer hover:from-[#3ABEFF] hover:to-[#FF92C9]"
          >
            Retrouvez toutes mes VOD sur YouTube !
          </a>
          <VodList />
          <div className="w-full flex justify-center mt-0 mb-16 md:mb-0">
            <div className="w-full max-w-5xl rounded-2xl shadow-xl bg-gradient-to-r from-[#3ABEFF]/80 via-white/80 to-[#FF92C9]/80 border-2 border-[#FF92C9] px-10 py-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-50 rounded-2xl pointer-events-none z-0" />
              <div className="relative z-10 flex flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src="/FNe3LPhUcAQEQ4F.png" alt="Mascotte" className="w-24 h-24 rounded-xl" />
                  <span className="text-[1.4rem] font-bold bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent">Découvrez moi sur mes formats Youtube !</span>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.youtube.com/@katchanvt/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 font-bold text-lg bg-gradient-to-r from-[#3ABEFF] to-[#FF92C9] bg-clip-text text-transparent hover:from-[#FF92C9] hover:to-[#3ABEFF]"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg" alt="YouTube" className="w-8 h-8" />
                    YouTube
                  </a>
                  <div className="h-10 w-px bg-[#FF92C9]/60 mx-2" />
                  <a
                    href="https://www.youtube.com/@katchanvt/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 font-bold text-lg bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent hover:from-[#3ABEFF] hover:to-[#FF92C9]"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Youtube_shorts_icon.svg" alt="Shorts" className="w-8 h-8" />
                    Shorts
                  </a>
                </div>
              </div>
            </div>
          </div>
           <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24" />

        </div>
      </main>
    </>
  );
}
