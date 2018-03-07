var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: "abbazabba"}));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    if(req.session.counter == undefined){
        req.session.counter = 0;
    }
    else{
        req.session.counter += 1;
    }
    var counter = req.session.counter;
    res.render("index", {counter});
});

app.get("/reset", function(req, res){
    req.session.counter = 0;
    res.redirect("/")
});

app.get("/twos", function(req, res){
    req.session.counter += 1;
    res.redirect("/");
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});