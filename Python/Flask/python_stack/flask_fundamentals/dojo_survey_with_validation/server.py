from flask import Flask, render_template, request, redirect, flash, session
import re

app = Flask(__name__)
app.secret_key="shhhh"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=["POST"])
def result():
    name = request.form["name"]
    location = request.form["location"]
    language = request.form["language"]
    comment = request.form["comment"]

    error = False
    if len(name) < 1:
        flash("Name field cannot be blank")
        error = True
    if len(comment) < 1:
        flash("Comment field cannot be blank")
        error = True
    if len(comment) > 120:
        flash("Comment cannot be longer than 120 characters")
        error = True
    if error == True:
        return redirect("/")
    return render_template("result.html", name = name, location = location, language = language, comment = comment)

app.run(debug=True)