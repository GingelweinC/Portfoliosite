export const metadata = {
  title: "KatChanVT | Planning",
};
import BannerPlanning from './BannerPlanning';

import Image from 'next/image';

const rotationStyle = (
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
);

export default function PlanningPage() {
  return (
    <>
      {rotationStyle}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
  <div className="w-full h-full bg-white/60" />
      </div>
  <main className="relative flex flex-row items-stretch justify-center overflow-hidden min-h-screen">
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
  <div className="flex-1 w-full h-full flex flex-col justify-center items-center relative z-10 p-0 m-0 gap-0 pt-32">
    <div className="flex flex-row items-center justify-center gap-2 mb-4 relative z-20">
          <Image src="/time.png" alt="Streamer horloge gauche" width={96} height={96} className="rounded-xl" style={{ transform: 'scaleX(-1)' }} />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent text-center">Planning de la semaine</h1>
          <Image src="/time.png" alt="Streamer horloge droite" width={96} height={96} className="rounded-xl" />
    </div>
    <div className="flex-1 w-full flex items-center justify-center">
      <BannerPlanning />
    </div>
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
