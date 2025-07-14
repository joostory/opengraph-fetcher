import { URL } from 'url';
import { makeValidUrl } from "./utils";
import * as WebsiteFetcher from './WebsiteFetcher';
import * as YoutubeOembedFetcher from './YoutubeOembedFetcher';

export function fetch(url: string): Promise<any> {
  const validUrl = makeValidUrl(url);
  let hostname = new URL(validUrl).hostname;
  if (hostname.indexOf("youtube.com") >= 0
    || hostname.indexOf("youtu.be") >= 0) {
    return YoutubeOembedFetcher.fetch(validUrl);
  } else {
    return WebsiteFetcher.fetch(validUrl);
  }
}
