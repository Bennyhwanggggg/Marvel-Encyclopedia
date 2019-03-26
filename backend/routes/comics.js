var express = require("express");
var router = express.Router();
const https = require("https");
var bodyParser = require("body-parser");
var request = require('request');
var md5 = require('md5');

const url = 'https://gateway.marvel.com:443/v1/public/comics'
const PUBLIC_KEY = `${process.env.PUBLIC_KEY}`
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`

// /comics endpoint
router.get('/', (req, res) => {
    console.log('/comics called')
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`)
    request({
        uri: url,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId} endpoint
router.get('/:id', (req, res) => {
    console.log('/comics/id called')
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}`,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/characters endpoint
router.get('/:id/characters', (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/characters`,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/creaters endpoint
router.get('/:id/creators', (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/creators`,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/events endpoint
router.get('/:id/events', (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/events`,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

// /comics/{comicId}/stories endpoint
router.get('/:id/stories', (req, res) => {
    const timeStamp = Date.now().toString();
    const md5hash = md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    request({
        uri: `${url}/${req.params.id}/stories`,
        qs: {
            ts: timeStamp,
            apikey: PUBLIC_KEY,
            hash: md5hash
        }
    }).pipe(res);
});

module.exports = router;