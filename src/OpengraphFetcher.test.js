const fetcher = require('./OpengraphFetcher')

test('import Opengraph Fetcher', () => {
  expect(fetcher).not.toBeNull()
})

test('fetch youtube', done => {
  fetcher.fetch('https://youtu.be/d6jnImCVanY', opengraph => {
    expect(opengraph).not.toBeNull()
    expect(opengraph.title).toBe('[ENG] 농심에서 또 라면이!? 건면새우탕을 먹어봤습니다.')
    expect(opengraph.url).toBe('https://www.youtube.com/watch?v=d6jnImCVanY')
    expect(opengraph.type).toBe('video.other')
    expect(opengraph.image).toBe('https://i.ytimg.com/vi/d6jnImCVanY/maxresdefault.jpg')
    expect(opengraph.mediaUrl).toBe('https://www.youtube.com/embed/d6jnImCVanY')
    expect(opengraph.host).toBe('www.youtube.com')
    done()
  })
})
