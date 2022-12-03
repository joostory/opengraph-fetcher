const axios = require('axios')
const cheerio = require('cheerio')
const { URL } = require('url')
const { makeValidUrl } = require("./utils")

function makeTitle($) {
	let ogTitle = $('head meta[property="og:title"]').attr('content')
	let htmlTitle = $('head title').text()
	if (ogTitle) {
		return ogTitle
	} else if (htmlTitle) {
		return htmlTitle
	} else {
		return ''
	}
}

function makeDescription($) {
	let ogDescription = $('head meta[property="og:description"]').attr('content')
	let htmlDescription = $('head meta[name="description"]').attr('content')
	if (ogDescription) {
		return ogDescription
	} else if (htmlDescription) {
		return htmlDescription
	} else {
		return ''
	}
}

function makeUrl($, url) {
	const og = $('head meta[property="og:url"]').attr('content')
	let result = og? og : url
	return result.replace(/^\/\//, 'http://')
}

function makeImage($) {
	const og = $('head meta[property="og:image"]').attr('content')
	let result = og? og : ''
	return result.replace(/^\/\//, 'http://')
}

function makeType($, url) {
	let og = $('head meta[property="og:type"]').attr('content')
	if (og) {
		return og
	} else {
		return 'website'
	}
}

function makeMediaUrl($, url) {
	let og = $('head meta[property="og:video:url"]').attr('content')
	if (og) {
		return og
	} else {
		return ''
	}
}

async function fetch(url) {
	const r = await axios.get(url)
	const text = r.data
	
	console.log("text", text)

	let $ = cheerio.load(text)
	let opengraph = {
		title: makeTitle($),
		description: makeDescription($),
		url: makeUrl($, url),
		image: makeImage($),
		type: makeType($),
		mediaUrl: makeMediaUrl($)
	}
	opengraph.host = new URL(makeValidUrl(opengraph.url)).hostname
	return opengraph
}

module.exports = {
  fetch: fetch
}
