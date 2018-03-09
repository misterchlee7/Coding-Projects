var express = require("express");
var app = express();
var path = require("path");
// var session = require("express-session");

app.use(express.static(path.join(__dirname, "./static")));
// app.use(session({secret: "abbazabba"}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});

var logged_users = [];
var chat_log = [];
var io = require("socket.io").listen(server);
io.sockets.on("connection", function(socket){
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);

    socket.emit("new_user_name_req", socket.id.substring(0,6));
    socket.on("new_user_logged", function(data){
        logged_users.push(data);
        io.emit("new_user_announce", context = { user_entered: data });
        socket.emit("new_user_update_screen", context = { user_entered: data, logged_users: logged_users, chat_log: chat_log })
    });
    socket.on("message_sent", function(data){
        chat_log.push(`${data.chat_user.name} -${data.chat_user.user_id}:   ${data.chat}`);
        io.emit("message_sent_broadcast", `${data.chat_user.name} -${data.chat_user.user_id}:   ${data.chat}`);
    });
});
