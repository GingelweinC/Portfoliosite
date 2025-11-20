import { NextResponse } from 'next/server';
import { isChannelLiveServer } from '@/utils/twitch';

export async function GET() {
  try {
    const live = await isChannelLiveServer();
    return NextResponse.json({ live });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ live: false, error: message }, { status: 500 });
  }
}
