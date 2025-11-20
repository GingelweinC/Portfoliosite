import { NextResponse } from 'next/server';
import { getTwitchAppTokenServer } from '../../../utils/twitch';

const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';


const TWITCH_USER_ID = process.env.TWITCH_USER_ID || '';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user') || '';
  const limit = searchParams.get('limit') || '6';

  if (!user) {
    return NextResponse.json({ error: 'Missing user parameter' }, { status: 400 });
  }


  const userId = TWITCH_USER_ID;
  if (!userId) {
    return NextResponse.json({ error: 'Missing TWITCH_USER_ID env variable' }, { status: 500 });
  }

  // Generate Oauth token
  const token = await getTwitchAppTokenServer();

  function getStartOfWeek(date: Date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); 
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  type TwitchClip = {
    id: string;
    title: string;
    url: string;
    thumbnail_url: string;
  };
  let clips: TwitchClip[] = [];
  let weekOffset = 0;
  const maxTries = 6;
  let found = false;

  while (!found && weekOffset < maxTries) {
    const now = new Date();
    const startOfWeek = getStartOfWeek(new Date(now.getTime() - weekOffset * 7 * 24 * 60 * 60 * 1000));
    const startedAt = startOfWeek.toISOString();
    const url = `https://api.twitch.tv/helix/clips?broadcaster_id=${userId}&first=${limit}&started_at=${startedAt}`;
    const clipsRes = await fetch(url, {
      headers: {
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${token}`,
      },
    });
    const clipsData = await clipsRes.json();
    console.log(`Twitch API clips response for weekOffset ${weekOffset}:`, clipsData);
    clips = (clipsData.data || []);
    if (clips.length >= Number(limit)) {
      found = true;
    } else {
      weekOffset++;
    }
  }

  const formattedClips = clips.slice(0, Number(limit)).map((clip: TwitchClip) => ({
    id: clip.id,
    title: clip.title,
    url: clip.url,
    thumbnail_url: clip.thumbnail_url,
  }));

  return NextResponse.json({ clips: formattedClips });
}
