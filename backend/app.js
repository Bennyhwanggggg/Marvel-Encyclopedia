var express = require("express");
var app = express();

var port = 9000;

var routes = require('./routes/comics')

app.use('/comics',routes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))