import axios from 'axios';

function findYoutubeKey(targetUrl: string): string | null {
  const u = new URL(targetUrl);
  if (u.hostname == 'youtu.be') {
    return u.pathname.substr(1);
  } else {
    return u.searchParams.get('v');
  }
}

async function fetch(url: string): Promise<any> {
  let youtubeKey = findYoutubeKey(url);
  let youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
  let requestUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeUrl)}&type=json`;
  const r = await axios.get(requestUrl);
  const json = r.data;
  return {
    title: json.title,
    description: json.title,
    url: youtubeUrl,
    host: 'www.youtube.com',
    image: json.thumbnail_url,
    type: json.type,
    mediaUrl: `https://www.youtube.com/embed/${youtubeKey}?feature=oembed`
  };
}

export {
  fetch
};
