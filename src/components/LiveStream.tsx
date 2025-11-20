export default function LiveStream() {
  return (
    <div className="w-full flex flex-col items-center">
      <iframe
        src="https://player.twitch.tv/?channel=otplol_&parent=localhost"
        height="480"
        width="800"
        allowFullScreen
        frameBorder="0"
        className="rounded-lg shadow-lg max-w-full"
        title="Twitch Live Stream"
      ></iframe>
      <a href="https://twitch.tv/katchanvt" target="_blank" rel="noopener" className="mt-4 text-[#FF92C9] font-bold">Regarder sur Twitch</a>
    </div>
  );
}
