"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function findYoutubeKey(targetUrl) {
    const u = new URL(targetUrl);
    if (u.hostname == 'youtu.be') {
        return u.pathname.substring(1);
    }
    else {
        return u.searchParams.get('v');
    }
}
function fetch(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let youtubeKey = findYoutubeKey(url);
        let youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
        let requestUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeUrl)}&type=json`;
        const r = yield axios_1.default.get(requestUrl);
        const json = r.data;
        return {
            title: json.title,
            description: json.title,
            url: youtubeUrl,
            host: 'www.youtube.com',
            image: json.thumbnail_url,
            type: json.type,
            mediaUrl: `https://www.youtube.com/embed/${youtubeKey}?feature=oembed`
        };
    });
}
exports.default = {
    fetch
};
