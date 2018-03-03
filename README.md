# Opengraph Fetcher

Opengraph를 fetch 합니다.

## Use

```
OpengraphFetcher.fetch('test.com', opengraph => {
  ...
})
```

## Data

```
{
  title: '...',
  description: '...',
  url: 'og:url',
  image: 'og:image:url',
  type: 'og:type',
  mediaUrl: 'og:media:url'
}
```
