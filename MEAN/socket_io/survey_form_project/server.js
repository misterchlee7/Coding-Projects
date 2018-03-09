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
    res.redirect("/");
});

var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on("posting_form", function(data){
        console.log(`Received form data: ${data.name} ${data.location} ${data.language} ${data.comment} ${data.random}`);
        socket.emit("server_response", context = {name: data.name, location: data.location, language: data.language, comment: data.comment, random: data.random});
    })
})
