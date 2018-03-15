var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/restfulTaskAPI/dist"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/restful_task_api");

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 1 },
    description: { type: String, "default": "" },
    completed: { type: Boolean, "default": false }
}, { timestamps: true });
mongoose.model("Task", TaskSchema);
var Task = mongoose.model("Task");

// display all tasks
app.get("/tasks", (req, res) => {
    Task.find({}, function(err, tasks){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", tasks: tasks });
        }
    })
})

// add new task
app.post("/tasks", (req, res) => {
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    });
    task.save(function(err){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: task });
        }
    })
})

// retrieve specific task
app.get("/tasks/:id", (req, res) => {
    Task.findOne({ _id: req.params.id }, function(err, result){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: result });
        }
    })
})

// delete a task
app.delete("/tasks/:id", (req, res) => {
    Task.remove({ _id: req.params.id }, function(err, result){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: result });
        }
    })
})

// update a task
app.put("/tasks/:id", (req, res) => {
    Task.update({ _id: req.params.id }, req.body, function(err, result){
        if(err){
            res.json({ message: "Error", error: err });
        }
        else{
            res.json({ message: "Success", data: result });
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})