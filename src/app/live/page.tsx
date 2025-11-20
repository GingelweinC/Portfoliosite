export const metadata = {
  title: "KatChanVT | Live",
};


const rotationStyle = (
  <style>{`
    .rotate-slow { animation: spin 30s linear infinite; }
    .rotate-reverse { animation: spin-reverse 30s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes spin-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
  `}</style>
);

export default function LivePage() {
  return (
    <>
      {rotationStyle}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
  <div className="w-full h-full bg-white/60" />
      </div>
      <main className="relative flex flex-row items-stretch justify-center p-2 sm:p-6 md:p-12 overflow-hidden min-h-screen">
  <div className="flex-1 flex flex-col justify-center relative z-10 px-1 sm:px-4 md:px-8 -mb-4 mx-auto">
    <div className="w-full flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 flex flex-col items-center w-full max-w-5xl mx-auto">
        <a
          href="https://twitch.tv/katchanvt"
          target="_blank"
          rel="noopener"
          className="text-3xl font-bold mt-0 mb-4 bg-gradient-to-r from-[#FF92C9] to-[#3ABEFF] bg-clip-text text-transparent transition duration-200 cursor-pointer block hover:from-[#3ABEFF] hover:to-[#FF92C9] text-center"
        >
          Viens me voir en live sur Twitch !
        </a>
        <div className="w-full flex flex-col items-center">
          <div style={{width: '100%', aspectRatio: '16/9', maxWidth: '100%'}} className="flex justify-center items-center">
                      <iframe
                        src="https://player.twitch.tv/?channel=katchanvt&parent=katchanvt.fr&parent=www.katchanvt.fr"
                        allowFullScreen
                        frameBorder="0"
                        className="rounded-lg shadow-lg w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-[480px] lg:min-h-[600px]"
                        title="Twitch Live Stream"
                        style={{width: '100%', height: '100%', aspectRatio: '16/9'}}
                      ></iframe>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-none justify-end w-auto lg:ml-16 xl:ml-32">
        <div className="w-40 h-48 sm:w-64 sm:h-80 md:w-96 md:h-[700px] max-w-full max-h-[700px]">
                    <iframe
                      src="https://www.twitch.tv/embed/katchanvt/chat?parent=katchanvt.fr&parent=www.katchanvt.fr"
                      className="rounded-lg border border-[#FF92C9] w-full h-full"
                      allowFullScreen
                      title="Twitch Chat"
                    ></iframe>
        </div>
      </div>
    </div>
  </div>
      </main>
    </>
  );
}
