const fetcher = require('./index')

test('import Opengraph Fetcher', () => {
  expect(fetcher).not.toBeNull()
})

test('fetch youtube', async () => {
  const opengraph = await fetcher.fetch('https://youtu.be/9bZkp7q19f0')
  console.log(opengraph)
  expect(opengraph).not.toBeNull()
  expect(opengraph.url).toBe('https://www.youtube.com/watch?v=9bZkp7q19f0')
  expect(opengraph.type).toBe('video')
  expect(opengraph.image).toBe('https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg')
  expect(opengraph.mediaUrl).toBe('https://www.youtube.com/embed/9bZkp7q19f0?feature=oembed')
  expect(opengraph.host).toBe('www.youtube.com')
})

test('fetch github', async () => {
  const opengraph = await fetcher.fetch('https://github.com/joostory/opengraph-fetcher')
  console.log(opengraph)
  expect(opengraph).not.toBeNull()
  expect(opengraph.title).toBe('GitHub - joostory/opengraph-fetcher')
  expect(opengraph.url).toBe('https://github.com/joostory/opengraph-fetcher')
  expect(opengraph.type).toBe('object')
  expect(opengraph.host).toBe('github.com')
})

test('fetch test', async () => {
  const opengraph = await fetcher.fetch('https://www.youtube.com/watch?v=otrFaP7A2VU')
  console.log(opengraph)
  expect(opengraph).not.toBeNull()
  expect(opengraph.title).toBe('치즈스틱을 밥이랑 먹으려면')
  expect(opengraph.url).toBe('https://www.youtube.com/watch?v=otrFaP7A2VU')
  expect(opengraph.type).toBe('video')
  expect(opengraph.host).toBe('www.youtube.com')
})

test('프로토콜 없는 url', async () => {
  try {
    const og = await fetcher.fetch("https://wiggloo.net")
    expect(og).not.toBeNull()
    expect(og.host).toBe('wiggloo.net')
  } catch (e) {
    console.error(e)
    throw e
  }
})