const { URL } = require('url')
const { makeValidUrl } = require("./utils")
const WebsiteFetcher = require('./WebsiteFetcher')
const YoutubeOembedFetcher = require('./YoutubeOembedFetcher')

module.exports = {
	fetch: (url) => {
		const validUrl = makeValidUrl(url)
		let hostname = new URL(validUrl).hostname
		if (hostname.indexOf("youtube.com") >= 0
			|| hostname.indexOf("youtu.be") >= 0) {
			return YoutubeOembedFetcher.fetch(validUrl)
		} else {
			return WebsiteFetcher.fetch(validUrl)
		}
	}
}
