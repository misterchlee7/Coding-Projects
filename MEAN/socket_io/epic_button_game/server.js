var express = require("express");
var app = express();
var path = require("path");
var session = require("express-session");

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: "abbazabba"}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/process", function(req, res){
});

app.get("/reset", function(req, res){
});

var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is ", socket.id);
    let total_count = 0;

    socket.on("epic_btn_clicked", function(){
        total_count += 1;
        console.log(`Total count is ${total_count}`)
        io.emit("total_count", total_count);
    })
    socket.on("reset_btn_clicked", function(){
        total_count = 0;
        console.log(`Total count is ${total_count}`)
        io.emit("total_count", total_count);
    })
})