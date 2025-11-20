export const metadata = {
	title: "KatChanVT | Accueil",
};

import Image from 'next/image';

const rotationStyle = (
	<>
		<style>{`
			.rotate-slow {
				animation: spin 30s linear infinite;
			}
			.rotate-reverse {
				animation: spin-reverse 30s linear infinite;
			}
			@keyframes spin {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(360deg); }
			}
			@keyframes spin-reverse {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(-360deg); }
			}
		`}</style>
	       <style>{`
		       .rotate-slow {
			       animation: spin 30s linear infinite;
		       }
		       .rotate-reverse {
			       animation: spin-reverse 30s linear infinite;
		       }
		       .rotate-slow-start {
			       animation: spin-start 30s linear infinite;
		       }
		       .rotate-slow-start2 {
			       animation: spin-start2 30s linear infinite;
		       }
		       .rotate-slow-start-neg {
			       animation: spin-start-neg 30s linear infinite;
		       }
	       .rotate-reverse-start-neg {
		       animation: spin-reverse-start-neg 30s linear infinite;
	       }
	       .rotate-reverse-start-neg2 {
		       animation: spin-reverse-start-neg2 30s linear infinite;
	       }
		       @keyframes spin {
			       0% { transform: rotate(0deg); }
			       100% { transform: rotate(360deg); }
		       }
		       @keyframes spin-reverse {
			       0% { transform: rotate(0deg); }
			       100% { transform: rotate(-360deg); }
		       }
		       @keyframes spin-start {
			       0% { transform: rotate(9deg); }
			       100% { transform: rotate(369deg); }
		       }
		      @keyframes spin-start2 {
			       0% { transform: rotate(11deg); }
			       100% { transform: rotate(370deg); }
		       }
		      
			@keyframes spin-reverse-start-neg {
				0% { transform: rotate(-9deg); }
				100% { transform: rotate(-369deg); }
			}
				@keyframes spin-reverse-start-neg2 {
				0% { transform: rotate(-5deg); }
				100% { transform: rotate(-365deg); }
			}
				
	       `}</style>
	</>
);

export default function Home() {
	return (
		<>
			{rotationStyle}
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5ED6E9] to-[#FF92C9]">
				<div className="w-full h-full bg-white/60" />
			</div>
			<main className="relative flex flex-row items-stretch justify-center p-33 overflow-hidden">
						<div className="hidden lg:flex flex-col items-center w-1/4 relative" style={{alignItems: 'flex-start'}}>
											<div className="relative h-[450px] w-full" style={{top: '-22px', left: '-3px'}}>
										<Image src="/Bike-Sprocket-Vector-01_0005_Calque-1.png" alt="Engrenage bleu calque 1" width={140} height={140} className="absolute left-0 rotate-slow" style={{top: '-10px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-02_0000_Calque-2.png" alt="Engrenage rose calque 2" width={140} height={140} className="absolute left-8 rotate-reverse" style={{top: '115px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-01_0004_Calque-6.png" alt="Engrenage bleu calque 6" width={140} height={140} className="absolute left-0 rotate-slow-start" style={{top: '240px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-02_0002_Calque-4.png" alt="Engrenage rose calque 4" width={140} height={140} className="absolute left-8 rotate-reverse" style={{top: '365px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-01_0003_Calque-5.png" alt="Engrenage bleu calque 5" width={140} height={140} className="absolute left-0 rotate-slow-start" style={{top: '490px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-02_0001_Calque-3.png" alt="Engrenage rose calque 3" width={140} height={140} className="absolute left-8 rotate-reverse-start-neg2" style={{top: '610px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center justify-center relative z-10 gap-8 max-w-5xl px-4 mx-auto">
					<div className="flex flex-col items-center gap-4">
						<Image src="/Kat-Chan-logo.png" alt="Logo Katchanvt" width={600} height={180} priority className="w-[600px] h-[180px] object-contain" />
						<Image src="/coucou.png" alt="Streamer coucou" width={120} height={120} className="mb-2 rounded-xl" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-[#FF92C9] mb-2 text-center">Retrouvez moi sur tous mes réseaux !</h1>
					<div className="w-24 h-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] mx-auto mb-2" />
							<div className="flex flex-col gap-4 mt-2 justify-center items-center w-full">
												<div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full justify-center items-center mx-auto">
    <a href="https://twitch.tv/katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] text-[#222] font-bold hover:from-[#B6FFFD] hover:to-[#FF92C9] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg" alt="Twitch" width={24} height={24} className="h-6 w-6" /> Twitch</a>
    <a href="https://twitter.com/katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B6FFFD] to-[#FF92C9] text-[#222] font-bold hover:from-[#FF92C9] hover:to-[#B6FFFD] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" width={24} height={24} className="h-6 w-6" /> Twitter</a>
    <a href="https://youtube.com/@katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] text-[#222] font-bold hover:from-[#B6FFFD] hover:to-[#FF92C9] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg" alt="YouTube" width={24} height={24} className="h-6 w-6" /> YouTube</a>
    <a href="https://www.youtube.com/@katchanvtvod" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B6FFFD] to-[#FF92C9] text-[#222] font-bold hover:from-[#FF92C9] hover:to-[#B6FFFD] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg" alt="YouTube VOD" width={24} height={24} className="h-6 w-6" /> VOD</a>
    <a href="https://discord.com/invite/RRmY73YSFC" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] text-[#222] font-bold hover:from-[#B6FFFD] hover:to-[#FF92C9] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" alt="Discord" width={24} height={24} className="h-6 w-6" /> Discord</a>
    <a href="https://instagram.com/katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B6FFFD] to-[#FF92C9] text-[#222] font-bold hover:from-[#FF92C9] hover:to-[#B6FFFD] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width={24} height={24} className="h-6 w-6" /> Instagram</a>
    <a href="https://tiktok.com/@katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] text-[#222] font-bold hover:from-[#B6FFFD] hover:to-[#FF92C9] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" alt="TikTok" width={24} height={24} className="h-6 w-6" /> TikTok</a>
    <a href="https://uwumarket.us/collections/katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B6FFFD] to-[#FF92C9] text-[#222] font-bold hover:from-[#FF92C9] hover:to-[#B6FFFD] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="/fV2U3iEi_400x400.jpg" alt="UWU Market" width={24} height={24} className="h-6 w-6" /> UWU Market</a>
    <a href="https://throne.com/katchan" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF92C9] to-[#B6FFFD] text-[#222] font-bold hover:from-[#B6FFFD] hover:to-[#FF92C9] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="/throne.jpeg" alt="Throne" width={24} height={24} className="h-6 w-6" /> Throne</a>
	<a href="https://www.instant-gaming.com/fr/?igr=katchanvt" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B6FFFD] to-[#FF92C9] text-[#222] font-bold hover:from-[#FF92C9] hover:to-[#B6FFFD] transition justify-center w-full min-w-[140px] max-w-xs text-base sm:text-lg md:text-xl"><Image src="/instantgaming.jpeg" alt="Instant Gaming" width={24} height={24} className="h-6 w-6" /> Instant Gaming</a>
	</div>
			</div>
			</div>
						<div className="hidden lg:flex flex-col items-center w-1/4 relative" style={{alignItems: 'flex-end'}}>
											<div className="relative h-[450px] w-full" style={{top: '-22px', right: '-3px'}}>
										<Image src="/Bike-Sprocket-Vector-02_0005_Calque-1.png" alt="Engrenage rose calque 1" width={140} height={140} className="absolute right-0 rotate-reverse" style={{top: '-10px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-01_0000_Calque-2.png" alt="Engrenage bleu calque 2" width={140} height={140} className="absolute right-8 rotate-slow-start" style={{top: '115px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-02_0004_Calque-6.png" alt="Engrenage rose calque 6" width={140} height={140} className="absolute right-0 rotate-reverse-start-neg2" style={{top: '240px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-01_0002_Calque-4.png" alt="Engrenage bleu calque 4" width={140} height={140} className="absolute right-8 rotate-slow-start" style={{top: '365px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-02_0003_Calque-5.png" alt="Engrenage rose calque 5" width={140} height={140} className="absolute right-0 rotate-reverse-start-neg" style={{top: '490px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
										<Image src="/Bike-Sprocket-Vector-01_0001_Calque-3.png" alt="Engrenage bleu calque 3" width={140} height={140} className="absolute right-8 rotate-slow-start2" style={{top: '610px', width: '140px', minWidth: '140px', maxWidth: '140px'}} />
					</div>
				</div>
			</main>
		</>
	);
}
