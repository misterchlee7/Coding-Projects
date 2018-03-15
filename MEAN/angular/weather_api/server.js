var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/weatherApiApp/dist"));

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/weather_api");

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./weatherApiApp/dist/index.html"));
})

app.listen(8000, function(){
    console.log("listening to port 8000")
})