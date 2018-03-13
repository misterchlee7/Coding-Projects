var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/message_board");

var PostSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    post: { type: String, required: true, minlength: 1 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
    }, { timestamps: true }); 

var CommentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    comment: { type: String, required: true, minlength: 1 },
    _post: { type: Schema.Types.ObjectId, ref: "Post" }
}, { timestamps: true });

mongoose.model("Post", PostSchema);
mongoose.model("Comment", CommentSchema);
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

app.get("/", function(req, res){
    Post.find({}, null, {sort: {createdAt: -1}}).populate("comments").exec(function(err, posts){
        if(err){
            res.render("index", { errors: Post.errors });
        }
        else{
            res.render("index", { posts: posts });
        }
    })
})

app.post("/post_msg", function(req, res){
    var post = new Post({
        name: req.body.post_name,
        post: req.body.post_text
    });
    post.save(function(err){
        if(err){
            res.render("index", { errors: post.errors });
        }
        else{
            res.redirect("/");
        }
    })
})

app.post("/post_comment/:id", function(req, res){
    Post.findOne({ _id: req.params.id }, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err){
            post.save(function(err){
                if(err){
                    res.render("index", { errors: comment.errors });
                }
                else{
                    res.redirect("/");
                }
            })
        })
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})