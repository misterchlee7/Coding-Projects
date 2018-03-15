var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(express.static(__dirname + "/ninjaGold/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ninja_gold");

var LogSchema = new mongoose.Schema({
    logString: { type: String, required: true },
    totalGold: { type: Number, required: true }
}, { timestamps: true });
mongoose.model("Log", LogSchema);
var Log = mongoose.model("Log");

app.get("/log", (req, res) => {
    Log.find({}, (err, log) => {
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", log: log })
        }
    })
})

app.post("/log", (req, res) => {
    var log = new Log({
        logString: req.body.logString,
        totalGold: req.body.totalGold
    });
    log.save(function(err){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", log: log });
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000")
})