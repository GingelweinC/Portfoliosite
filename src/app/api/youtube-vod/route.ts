import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || '';
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '3';

  if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
    return NextResponse.json({ error: 'Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID env variable' }, { status: 500 });
  }

  // Fetch VODs from YouTube API
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log('YouTube API VOD response:', data);

  type YoutubeItem = {
    id: { kind: string; videoId?: string };
    snippet: {
      title: string;
      thumbnails?: {
        high?: { url: string };
        default?: { url: string };
      };
    };
  };
  const vods = (data.items || [])
    .filter((item: YoutubeItem) => item.id.kind === 'youtube#video')
    .map((item: YoutubeItem) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail_url: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
    }));

  return NextResponse.json({ vods });
}