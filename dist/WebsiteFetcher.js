"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const cheerio = __importStar(require("cheerio"));
const url_1 = require("url");
const utils_1 = require("./utils");
function makeTitle($) {
    let ogTitle = $('head meta[property="og:title"]').attr('content');
    let htmlTitle = $('head title').text();
    if (ogTitle) {
        return ogTitle;
    }
    else if (htmlTitle) {
        return htmlTitle;
    }
    else {
        return '';
    }
}
function makeDescription($) {
    let ogDescription = $('head meta[property="og:description"]').attr('content');
    let htmlDescription = $('head meta[name="description"]').attr('content');
    if (ogDescription) {
        return ogDescription;
    }
    else if (htmlDescription) {
        return htmlDescription;
    }
    else {
        return '';
    }
}
function makeUrl($, url) {
    const og = $('head meta[property="og:url"]').attr('content');
    let result = og ? og : url;
    return result.replace(/^\/\//, 'http://');
}
function makeImage($) {
    const og = $('head meta[property="og:image"]').attr('content');
    let result = og ? og : '';
    return result.replace(/^\/\//, 'http://');
}
function makeType($) {
    let og = $('head meta[property="og:type"]').attr('content');
    if (og) {
        return og;
    }
    else {
        return 'website';
    }
}
function makeMediaUrl($) {
    let og = $('head meta[property="og:video:url"]').attr('content');
    if (og) {
        return og;
    }
    else {
        return '';
    }
}
function fetch(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const r = yield axios_1.default.get(url);
        const text = r.data;
        let $ = cheerio.load(text);
        let opengraph = {
            title: makeTitle($),
            description: makeDescription($),
            url: makeUrl($, url),
            host: '',
            image: makeImage($),
            type: makeType($),
            mediaUrl: makeMediaUrl($)
        };
        opengraph.host = new url_1.URL((0, utils_1.makeValidUrl)(opengraph.url)).hostname;
        return opengraph;
    });
}
exports.default = {
    fetch
};
