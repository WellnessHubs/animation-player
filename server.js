var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;

app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/docs'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
//app.listen(port);
// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) { app.listen(1234); }
// Instead do export the app:
else{ module.exports = app; }
