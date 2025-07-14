const makeValidUrl = (url: string): string => {
	if (!url.match(/https?:\/\//)) {
    return `http://${url}`
  }
  return url
}

export {
  makeValidUrl
}