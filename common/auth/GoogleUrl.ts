export const getGoogleUrl = () => {
  const googleUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  googleUrl.searchParams.append('client_id', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string);
  googleUrl.searchParams.append('redirect_uri', process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI as string);
  googleUrl.searchParams.append('response_type', 'code');
  googleUrl.searchParams.append('scope', 'https://www.googleapis.com/auth/userinfo.email');
  googleUrl.searchParams.append('access_type', 'offline');
  googleUrl.searchParams.append('prompt', 'consent')
  return googleUrl.toString();
};