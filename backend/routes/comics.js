var express = require("express");
var router = express.Router();
var request = require('request');
var md5 = require('md5');
var cacheMiddleware = require('../middleware/cache');

const url = 'https://gateway.marvel.com:443/v1/public/comics'
const PUBLIC_KEY = `${process.env.PUBLIC_KEY}`
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`

// /comics endpoint
router.get('/', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: url,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId} endpoint
router.get('/:id', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}`,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/characters endpoint
router.get('/:id/characters', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/characters`,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/creaters endpoint
router.get('/:id/creators', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/creators`,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/events endpoint
router.get('/:id/events', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/events`,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/stories endpoint
router.get('/:id/stories', cacheMiddleware(30), (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/stories`,
        qs: {
            ...req.query,
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

module.exports = router;