var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/1955api");

var PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 }
}, { timestamps: true });
mongoose.model("People", PeopleSchema);
var People = mongoose.model("People");

app.get("/", function(req, res){
    People.find({}, function(err, people){
        if(err){
            console.log("Error", err);
            res.json({ message: "Error", error: err })
        }
        else{
            res.json(people)
        }
    })
})

app.get("/new/:name/", function(req, res){
    var person = new People({
        name: req.params.name
    });
    person.save(function(err){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.redirect("/");
        }
    })
})

app.get("/remove/:name/", function(req, res){
    People.findOne({ name: req.params.name }, function(err, person){
        if(err){
            res.json(err);
        }
        else{
            person.remove({ name: req.params.name });
            person.save(function(err){
                if(err){
                    res.json(err);
                }
                else{
                    res.redirect("/");
                }
            })
        }
    })
})

app.get("/:name", function(req, res){
    People.findOne({ name: req.params.name }, function(err, person){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
            console.log(person);
            res.json(person);
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000")
})