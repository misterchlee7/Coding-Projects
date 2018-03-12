var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var path = require("path");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/quoting_dojo");

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 3 }
}, { timestamps: true });
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");


app.get("/", function(req, res){
    res.render("index");
})

app.post("/process", function(req, res){
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function(err){
        if(err){
            res.render("index", { errors: quote.errors })
        }
        else {
            res.redirect("/quotes");
        }
    });
})

app.get("/quotes", function(req, res){
    Quote.find({}, null, {sort: {createdAt: -1}}, function(err, users){
        if(err){
            res.render("quotes", { errors: Quote.errors })
        }
        else{
            res.render("quotes", { users: users });
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})