var express = require("express");
var app = express();
var cors = require('cors');

var host = '127.0.0.1';
var port = 9000;

var routes = require('./routes/comics');

app.use(cors());
app.use('/comics', routes);

app.listen(port, host, () => console.log(`Server listening on port ${port}!`));