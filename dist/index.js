"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = fetch;
const url_1 = require("url");
const utils_1 = require("./utils");
const WebsiteFetcher_1 = __importDefault(require("./WebsiteFetcher"));
const YoutubeOembedFetcher_1 = __importDefault(require("./YoutubeOembedFetcher"));
function fetch(url) {
    const validUrl = (0, utils_1.makeValidUrl)(url);
    let hostname = new url_1.URL(validUrl).hostname;
    if (hostname.indexOf("youtube.com") >= 0
        || hostname.indexOf("youtu.be") >= 0) {
        return YoutubeOembedFetcher_1.default.fetch(validUrl);
    }
    else {
        return WebsiteFetcher_1.default.fetch(validUrl);
    }
}
