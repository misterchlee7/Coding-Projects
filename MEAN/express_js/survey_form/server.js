var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'abbazabba'}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index");
});

app.post("/process", function(req, res){
        req.session.name = req.body.name,
        req.session.location = req.body.location,
        req.session.language = req.body.language,
        req.session.comment = req.body.comment,
    res.redirect("/result");
});

app.get("/result", function(req, res){
    var context = {
        name : req.session.name,
        location : req.session.location,
        language : req.session.language,
        comment : req.session.comment, 
    }
    res.render("result", {info: context});
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});
