export const metadata = {
  title: "KatChanVT | À propos",
};

import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
 <style>{`
    .rotate-slow { animation: spin 30s linear infinite; }
    .rotate-reverse { animation: spin-reverse 30s linear infinite; }
    .rotate-slow-start { animation: spin-start 30s linear infinite; }
    .rotate-slow-start-neg { animation: spin-start-neg 30s linear infinite; }
    .rotate-reverse-start-neg2 { animation: spin-reverse-start-neg2 30s linear infinite; }
    .rotate-reverse-start-neg { animation: spin-reverse-start-neg2 30s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes spin-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
    @keyframes spin-start { 0% { transform: rotate(9deg); } 100% { transform: rotate(369deg); } }
    @keyframes spin-start-neg { 0% { transform: rotate(-3deg); } 100% { transform: rotate(357deg); } }
    @keyframes spin-reverse-start-neg2 { 0% { transform: rotate(-10deg); } 100% { transform: rotate(-369deg); } }
    @keyframes spin-reverse-start-neg { 0% { transform: rotate(-5deg); } 100% { transform: rotate(-369deg); } }

  `}</style>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
  <div className="w-full h-full bg-white/60" />
      </div>
        <main className="relative flex flex-row items-stretch justify-center p-0 overflow-hidden min-h-screen">
          {/* left column */}
          <div className="hidden lg:flex flex-col items-center w-1/4 relative" style={{alignItems: 'flex-start'}}>
          <div className="relative h-[450px] w-full" style={{top: '110px', left: '130px'}}>
            <Image src="/Bike-Sprocket-Vector-01_0005_Calque-1.png" alt="Engrenage bleu calque 1" width={140} height={140} className="absolute left-0 rotate-slow" style={{top: '-10px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-02_0000_Calque-2.png" alt="Engrenage rose calque 2" width={140} height={140} className="absolute left-8 rotate-reverse" style={{top: '115px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-01_0004_Calque-6.png" alt="Engrenage bleu calque 6" width={140} height={140} className="absolute left-0 rotate-slow-start" style={{top: '240px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-02_0002_Calque-4.png" alt="Engrenage rose calque 4" width={140} height={140} className="absolute left-8 rotate-reverse" style={{top: '365px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-01_0003_Calque-5.png" alt="Engrenage bleu calque 5" width={140} height={140} className="absolute left-0 rotate-slow-start-neg" style={{top: '490px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-02_0001_Calque-3.png" alt="Engrenage rose calque 3" width={140} height={140} className="absolute left-8 rotate-reverse-start-neg2" style={{top: '610px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
          </div>
        </div>
          <div className="flex-1 flex flex-col items-center justify-center relative z-10 gap-16 max-w-screen-xl px-4 mx-auto py-16 mt-8">
            <section className="flex flex-col items-center gap-0 w-full">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3ABEFF] to-[#FF92C9] bg-clip-text text-transparent mb-4">Charadesign</h2>
              <Image src="/KatChanPlugSuit.png" alt="Charadesign Katchanvt" width={640} height={1000} className="rounded-2xl shadow-lg" />
            </section>

            <section className="flex flex-col md:flex-row items-center gap-8 w-full -mt-12">
              <div className="flex flex-row gap-8 w-full items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Image src="/livre.png" alt="Livre Koleps" width={160} height={220} />
                </div>
                <div className="flex flex-col items-center gap-0 flex-1">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent mb-2">Lore</h1>
                  <p className="text-lg text-gray-700 text-center">
                    <span className="font-bold text-[#FF92C9]">KatChan</span> est une <span className="font-bold text-[#3ABEFF]">Neko Girl </span> qui voyage dans le temps. Après de nombreuses mésaventures, elle s&apos;est retrouvée coincée dans internet et est devenue vtubeuse pour partager ses aventures et conquérir le monde !
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-base font-semibold text-[#3ABEFF] mt-2">Livre disponible :</span>
                  <a href="https://www.youtube.com/watch?v=GgmoE3L2J5k&list=PL1B21MjwVg_u-eTUdd6KGNi31kBDSALkd&ab_channel=KatChanVT" target="_blank" rel="noopener" className="underline text-[#FF92C9] hover:text-[#3ABEFF]">Format audio</a>
                  <a href="https://www.wattpad.com/story/325013135-koleps" target="_blank" rel="noopener" className="underline text-[#3ABEFF] hover:text-[#FF92C9]">Format écrit</a>
                </div>
              </div>
            </section>
          </div>
          <div className="hidden lg:flex flex-col items-center w-1/4 relative" style={{alignItems: 'flex-end'}}>
          <div className="relative h-[450px] w-full" style={{top: '110px', right: '130px'}}>
            <Image src="/Bike-Sprocket-Vector-02_0005_Calque-1.png" alt="Engrenage rose calque 1" width={140} height={140} className="absolute right-0 rotate-reverse-start-neg" style={{top: '-10px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-01_0000_Calque-2.png" alt="Engrenage bleu calque 2" width={140} height={140} className="absolute right-8 rotate-slow" style={{top: '115px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-02_0004_Calque-6.png" alt="Engrenage rose calque 6" width={140} height={140} className="absolute right-0 rotate-reverse" style={{top: '240px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-01_0002_Calque-4.png" alt="Engrenage bleu calque 4" width={140} height={140} className="absolute right-8 rotate-slow-start" style={{top: '365px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-02_0003_Calque-5.png" alt="Engrenage rose calque 5" width={140} height={140} className="absolute right-0 rotate-reverse-start-neg2" style={{top: '490px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
            <Image src="/Bike-Sprocket-Vector-01_0001_Calque-3.png" alt="Engrenage bleu calque 3" width={140} height={140} className="absolute right-8 rotate-slow" style={{top: '610px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
          </div>
        </div>
      </main>
    </>
  );
}
