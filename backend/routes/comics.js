var express = require("express");
var router = express.Router();
const https = require("https");
var bodyParser = require("body-parser");
var request = require('request');
var md5 = require('md5');

const url = 'https://gateway.marvel.com:443/v1/public/comics'
const PUBLIC_KEY = `${process.env.PUBLIC_KEY}`
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`

router.get('/', (req, res) => {
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


router.get('/:id', (req, res) => {
    res.send('hi id')
});

module.exports = router;