# Opengraph Fetcher [![npm][npm-image]][npm-url]

[travis-url]: https://npmjs.org/package/opengraph-fetcher

[npm-image]: https://img.shields.io/npm/v/opengraph-fetcher.svg
[npm-url]: https://npmjs.org/package/opengraph-fetcher

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
