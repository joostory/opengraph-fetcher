const axios = require('axios')

function findYoutubeKey(targetUrl) {
  const u = new URL(targetUrl)
  if (u.hostname == 'youtu.be') {
    return u.pathname.substr(1)
  } else {
    return u.searchParams.get('v')
  }
}

module.exports = {
  fetch: (url) => {
    let youtubeKey = findYoutubeKey(url)
    let youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`
    return axios.get(`https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeUrl)}&type=json`)
      .then(r => r.data)
      .then(json => ({
        title: json.title,
        description: json.title,
        url: youtubeUrl,
        host: 'www.youtube.com',
        image: json.thumbnail_url,
        type: json.type,
        mediaUrl: `https://www.youtube.com/embed/${youtubeKey}?feature=oembed`
      }))
  }
}