"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidUrl = void 0;
const makeValidUrl = (url) => {
    if (!url.match(/https?:\/\//)) {
        return `http://${url}`;
    }
    return url;
};
exports.makeValidUrl = makeValidUrl;
