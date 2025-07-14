import { URL } from 'url';
import { makeValidUrl } from "./utils";
import WebsiteFetcher from './WebsiteFetcher';
import YoutubeOembedFetcher from './YoutubeOembedFetcher';
import { Opengraph } from './opengraph'

function fetch(url: string): Promise<Opengraph> {
  const validUrl = makeValidUrl(url);
  let hostname = new URL(validUrl).hostname;
  if (hostname.indexOf("youtube.com") >= 0
    || hostname.indexOf("youtu.be") >= 0) {
    return YoutubeOembedFetcher.fetch(validUrl);
  } else {
    return WebsiteFetcher.fetch(validUrl);
  }
}

export default {
  fetch
}