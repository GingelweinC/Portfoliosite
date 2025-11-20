export const metadata = {
  title: "KatChanVT | Clips",
};


import ClipsList from '../../components/ClipsList';

const rotationStyle = (
  <style>{`
    .rotate-slow { animation: spin 30s linear infinite; }
    .rotate-reverse { animation: spin-reverse 30s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes spin-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
  `}</style>
);

export default function ClipsPage() {
  return (
    <>
      {rotationStyle}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
  <div className="w-full h-full bg-white/60" />
      </div>
      <main className="relative flex flex-row items-stretch justify-center p-0 overflow-hidden min-h-screen">
        <div className="flex-1 flex flex-col justify-center relative z-10 px-2 sm:px-4 mx-auto w-full max-w-8xl pt-12 sm:pt-20 md:pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 mt-6 text-center">
            <a
              href="https://www.twitch.tv/katchanvt/clips?filter=clips&range=30d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent cursor-pointer hover:from-[#3ABEFF] hover:to-[#FF92C9]"
            >
              N&apos;hésitez pas à faire des clips&nbsp;!
            </a>
          </h1>
          <ClipsList />
          <div className="w-full h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 mb-16 md:mb-0" />
        </div>
      </main>
    </>
  );
}
