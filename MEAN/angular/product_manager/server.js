var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/productManagerApp/dist"));

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/productManagerApp");

var ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    image_url: { type: String, required: false  }
}, { timestamps: true });
mongoose.model("Product", ProductSchema);
var Product = mongoose.model("Product");

app.get("/api/products", (req, res) => {
    Product.find({}, (err, products)=> {
        if(err){
            res.json({ message: "api/get error", error: err });
        }
        else{
            res.json({ message: "api/get success", products: products });
        }
    })
})

app.get("/api/products/:id", (req, res) => {
    Product.findOne({ _id: req.params.id }, (err, product)=> {
        if(err){
            res.json({ message: "api/find specific error", error: err });
        }
        else{
            res.json({ message: "api/find specific success", product: product });
        }
    })
})

app.post("/api/products/new", (req, res) => {
    var product = new Product({
        title: req.body.title,
        price: req.body.price,
        image_url: req.body.image_url
    }); 
    product.save(function(err){
        if(err){
            res.json({ message: "api/post creation error", error: err });
        }
        else{
            res.json({ message: "api/post creation success", product: product });
        }
    })
})

app.put("/api/products/edit/:id", (req, res) => {
    Product.update({ _id: req.params.id }, req.body, function(err, product){
        if(err){
            res.json({ message: "api/put edit error", error: err });
        }
        else{
            res.json({ message: "api/put edit success", product: product });
        }
    })
})

app.delete("/api/products/delete/:id", (req, res) => {
    Product.findOne({ _id: req.params.id }).remove(function(err, product){
        if(err){
            res.json({ message: "api/del error", error: err });
        }
        else{
            res.json({ message: "api/del success", product: product });
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./productManagerApp/dist/index.html"));
})

app.listen(8000, () => {
    console.log("listening on port 8000")
})