var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mongoose_dash");

var MongooseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    sex: { type: String, required: true, minlength: 1 },
    astro_sign: { type: String, required: true, minlength: 1 }
}, { timestamps: true });
mongoose.model("Mongoose", MongooseSchema);
var Mongoose = mongoose.model("Mongoose");

app.get("/", function(req, res){
    Mongoose.find({}, null, {sort: {createdAt: -1}}, 
        function(err, mongooses){
            if(err){
                res.render("index", { errors: Mongoose.errors })
            }
            else{
                res.render("index", { mongooses: mongooses });
            }
    })
})

app.get("/ani/get/:id", function(req, res){
    Mongoose.findOne({ _id: req.params.id }, function(err, mongoose){
        if(err){
            res.render("ani_id", { errors: Mongoose.errors })
        }
        else{
            res.render("ani_id", { mongoose: mongoose })
        }
    })
})

app.get("/ani/new", function(req, res){
    res.render("ani_new");
})

app.post("/ani", function(req, res){
    var mongoose = new Mongoose({ name: req.body.name, sex: req.body.sex, astro_sign: req.body.astro_sign });
    mongoose.save(function(err){
        if(err){
            res.render("ani_new", { errors: mongoose.errors })
        }
        else{
            res.redirect(`/ani/get/${mongoose._id}`);
        }
    })
})

app.get("/ani/edit/:id", function(req, res){
    Mongoose.findOne({ _id: req.params.id }, function(err, mongoose){
        if(err){
            res.render(`ani_edit`, { errors: Mongoose.errors })
        }
        else{
            res.render(`ani_edit`, { mongoose: mongoose })
        }
    })
})

app.post("/ani/edit/:id", function(req, res){    
    Mongoose.findOne({ _id: req.params.id }, function(err, mongoose){
        if(err){
            res.render("ani_edit", { errors: Mongoose.errors })
        }    
        else{
            mongoose.set({ name: req.body.name });
            mongoose.set({ sex: req.body.sex });
            mongoose.set({ astro_sign: req.body.astro_sign });
            mongoose.save(function(err){
                if(err){
                    res.render("ani_edit", { errors: mongoose.errors });
                }
                else{
                    res.redirect(`/ani/get/${req.params.id}`)
                }
            })
        }
    }) 
})

app.post("/ani/destroy/:id", function(req, res){
    Mongoose.findOne({ _id: req.params.id }, function(err, mongoose){
        if(err){
            res.render("ani_edit", { errors: Mongoose.errors })
        }    
        else{
            mongoose.remove({ _id: req.params.id });
            mongoose.save(function(err){
                if(err){
                    res.render("index", { errors: mongoose.errors });
                }
                else{
                    res.redirect("/");
                }
            })
        }
    }) 
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})