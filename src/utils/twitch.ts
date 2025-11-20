export async function getChannelBannerServer() {
  const token = await getTwitchAppTokenServer();
  const userId = process.env.TWITCH_USER_ID;
  const clientId = process.env.TWITCH_CLIENT_ID;
  const url = `https://api.twitch.tv/helix/users?id=${userId}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Client-Id': clientId ?? '',
    } as Record<string, string>,
  });
  if (!res.ok) throw new Error('Failed to fetch user info');
  const data = await res.json();
  console.log('Twitch API users response:', JSON.stringify(data));
  return data.data && data.data[0]?.offline_image_url;
}

// These functions should only be used server-side
export async function getTwitchAppTokenServer() {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) throw new Error('Failed to get Twitch token');
  const data = await res.json();
  return data.access_token;
}

export async function isChannelLiveServer() {
  const token = await getTwitchAppTokenServer();
  const userLogin = process.env.TWITCH_USER_LOGIN;
  const clientId = process.env.TWITCH_CLIENT_ID;
  const url = `https://api.twitch.tv/helix/streams?user_login=${userLogin}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Client-Id': clientId ?? '',
    } as Record<string, string>,
  });
  if (!res.ok) throw new Error('Failed to fetch stream status');
  const data = await res.json();
  return data.data && data.data.length > 0;
}
