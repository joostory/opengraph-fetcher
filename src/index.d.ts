
export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
  mediaUrl: string;
  host: string;
}

export function fetch(url: string): Promise<OpenGraph>;
