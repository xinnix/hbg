var express = require('express');

var app = express();
app.use('/', function (req, res) {
    res.end('Hello,HBG!');
});

app.listen(3000);
