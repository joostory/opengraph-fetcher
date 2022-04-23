const { URL } = require('url')
const WebsiteFetcher = require('./WebsiteFetcher')
const YoutubeOembedFetcher = require('./YoutubeOembedFetcher')

module.exports = {
	fetch: (url) => {
		let hostname = new URL(url).hostname
		if (hostname.indexOf("youtube.com") >= 0
			|| hostname.indexOf("youtu.be") >= 0) {
			return YoutubeOembedFetcher.fetch(url)
		} else {
			return WebsiteFetcher.fetch(url)
		}
	}
}
