var express = require('express');
var app = express();
var port = process.env.PORT || 1121;
var parseArgs = require('minimist');
var harReader = require('./modules/HARReader.js');


app.listen(port, ()=>{//Start the server and listen on a port
    
    var har = new harReader();
    har.readHar('sample.har');
    console.log('Running Yama at:' + port);
});