const makeValidUrl = (url) => {
	if (!url.match(/https?:\/\//)) {
    return `http://${url}`
  }
  return url
}

module.exports = {
  makeValidUrl: makeValidUrl
}