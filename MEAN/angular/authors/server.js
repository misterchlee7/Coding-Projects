var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/authorsApp/dist"));

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/authorsApp");

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 }
}, { timestamps: true });
mongoose.model("Author", AuthorSchema);
var Author = mongoose.model("Author");

app.get("/authors", (req, res) => {
    Author.find({}, (err, authors) => {
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", authors: authors });
        }
    })
})

app.get("/edit/:id", (req, res) => {
    Author.findOne({ _id: req.params.id }, (err, author) => {
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", author: author });
        }
    })
})

app.post("/authors", (req, res) => {
    var author = new Author({
        name: req.body.name
    });
    author.save(function(err){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", author: author });
        }
    })
})

app.put("/edit/:id", (req, res) => {
    Author.update({ _id: req.params.id }, req.body, function(err, author){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", author: author });
        }
    })
})

app.delete("/delete/:id", (req, res) => {
    Author.findOne({ _id: req.params.id }).remove(function(err, data){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: data });
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./authorsApp/dist/index.html"));
})

app.listen(8000, () => {
    console.log("listening on port 8000");
})
