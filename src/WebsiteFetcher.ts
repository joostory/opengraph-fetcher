import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import { makeValidUrl } from "./utils";

function makeTitle($: cheerio.Root): string {
	let ogTitle = $('head meta[property="og:title"]').attr('content');
	let htmlTitle = $('head title').text();
	if (ogTitle) {
		return ogTitle;
	} else if (htmlTitle) {
		return htmlTitle;
	} else {
		return '';
	}
}

function makeDescription($: cheerio.Root): string {
	let ogDescription = $('head meta[property="og:description"]').attr('content');
	let htmlDescription = $('head meta[name="description"]').attr('content');
	if (ogDescription) {
		return ogDescription;
	} else if (htmlDescription) {
		return htmlDescription;
	} else {
		return '';
	}
}

function makeUrl($: cheerio.Root, url: string): string {
	const og = $('head meta[property="og:url"]').attr('content');
	let result = og? og : url;
	return result.replace(/^\/\//, 'http://');
}

function makeImage($: cheerio.Root): string {
	const og = $('head meta[property="og:image"]').attr('content');
	let result = og? og : '';
	return result.replace(/^\/\//, 'http://');
}

function makeType($: cheerio.Root): string {
	let og = $('head meta[property="og:type"]').attr('content');
	if (og) {
		return og;
	} else {
		return 'website';
	}
}

function makeMediaUrl($: cheerio.Root): string {
	let og = $('head meta[property="og:video:url"]').attr('content');
	if (og) {
		return og;
	} else {
		return '';
	}
}

async function fetch(url: string): Promise<any> {
	const r = await axios.get(url);
	const text = r.data;
	
	let $ = cheerio.load(text);
	let opengraph = {
		title: makeTitle($),
		description: makeDescription($),
		url: makeUrl($, url),
		image: makeImage($),
		type: makeType($),
		mediaUrl: makeMediaUrl($)
	};
	(opengraph as any).host = new URL(makeValidUrl(opengraph.url)).hostname;
	return opengraph;
}

export {
  fetch
}
