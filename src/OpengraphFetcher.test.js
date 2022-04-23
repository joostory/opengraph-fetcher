const fetcher = require('./OpengraphFetcher')

test('import Opengraph Fetcher', () => {
  expect(fetcher).not.toBeNull()
})

test('fetch youtube', done => {
  fetcher.fetch('https://youtu.be/9bZkp7q19f0')
    .then(opengraph => {
      expect(opengraph).not.toBeNull()
      expect(opengraph.url).toBe('https://www.youtube.com/watch?v=9bZkp7q19f0')
      expect(opengraph.type).toBe('video')
      expect(opengraph.image).toBe('https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg')
      expect(opengraph.mediaUrl).toBe('https://www.youtube.com/embed/9bZkp7q19f0?feature=oembed')
      expect(opengraph.host).toBe('www.youtube.com')
      done()
    })
    .catch(e => {
      done(e)
    })
})

test('fetch github', (done) => {
  fetcher.fetch('https://github.com/joostory/opengraph-fetcher')
    .then(opengraph => {
      expect(opengraph).not.toBeNull()
      expect(opengraph.title).toBe('GitHub - joostory/opengraph-fetcher')
      expect(opengraph.url).toBe('https://github.com/joostory/opengraph-fetcher')
      expect(opengraph.type).toBe('object')
      expect(opengraph.host).toBe('github.com')
      done()
    })
    .catch(e => {
      console.log(e)
      done(e)
    })
})

test('fetch test', (done) => {
  fetcher.fetch('https://www.youtube.com/watch?v=otrFaP7A2VU')
    .then(opengraph => {
      expect(opengraph).not.toBeNull()
      expect(opengraph.title).toBe('치즈스틱을 밥이랑 먹으려면')
      expect(opengraph.url).toBe('https://www.youtube.com/watch?v=otrFaP7A2VU')
      expect(opengraph.type).toBe('video')
      expect(opengraph.host).toBe('www.youtube.com')
      done()
    })
    .catch(e => {
      done(e)
    })
})
