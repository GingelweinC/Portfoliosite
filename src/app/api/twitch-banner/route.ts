import { NextResponse } from 'next/server';
import { getChannelBannerServer } from '@/utils/twitch';

export async function GET() {
  try {
    const banner = await getChannelBannerServer();
    console.log('API /twitch-banner: banner', banner);
    return NextResponse.json({ banner });
  } catch (e) {
    console.error('API /twitch-banner: error', e);
    const message = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ banner: null, error: message }, { status: 500 });
  }
}
