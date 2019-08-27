const fetcher = require('./OpengraphFetcher')

test('import Opengraph Fetcher', () => {
  expect(fetcher).not.toBeNull()
})

test('fetch youtube', done => {
  fetcher.fetch('https://youtu.be/d6jnImCVanY', opengraph => {
    expect(opengraph).not.toBeNull()
    expect(opengraph.url).toBe('https://www.youtube.com/watch?v=d6jnImCVanY')
    expect(opengraph.type).toBe('video.other')
    expect(opengraph.image).toBe('https://i.ytimg.com/vi/d6jnImCVanY/maxresdefault.jpg')
    expect(opengraph.mediaUrl).toBe('https://www.youtube.com/embed/d6jnImCVanY')
    expect(opengraph.host).toBe('www.youtube.com')
    done()
  })
})

test('fetch github', () => {
  fetcher.fetch('https://github.com/joostory/opengraph-fetcher', opengraph => {
    expect(opengraph).not.toBeNull()
    expect(opengraph.title).toBe('joostory/opengraph-fetcher')
    expect(opengraph.url).toBe('https://github.com/joostory/opengraph-fetcher')
    expect(opengraph.type).toBe('object')
    expect(opengraph.host).toBe('github.com')
    done()
  })
})
