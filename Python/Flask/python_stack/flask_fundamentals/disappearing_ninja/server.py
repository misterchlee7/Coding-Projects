from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route("/")
def index():
    return "No ninjas here"

@app.route("/ninja")
def ninja():
    return render_template("ninja.html")

@app.route("/ninja/<color>")
def coloring(color):
    if color == "blue":
        turtle_pic = "img/leonardo.jpg"
    elif color == "orange":
        turtle_pic = "img/michelangelo.jpg"
    elif color == "red":
        turtle_pic = "img/raphael.jpg"
    elif color == "purple":
        turtle_pic = "img/donatello.jpg"
    else:
        turtle_pic = "img/notapril.jpg"
    return render_template("ninja.html", turtle_img = turtle_pic)

app.run(debug=True)