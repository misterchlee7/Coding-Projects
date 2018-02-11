from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Shhhhh"

import random

@app.route("/")
def index():
    if not "match_num" in session:
        session["match_num"] = random.randint(0, 100)
        session["statement"] = ""
        session["color"] = "white"
        session["retry"] = "hidden"
        print session["match_num"]
    return render_template("index.html", result=session["statement"], bg_color=session["color"], retry=session["retry"])

@app.route("/process", methods=["POST"])
def process():
    if int(request.form["guess"]) > int(session["match_num"]):
        session["statement"] = "Too high!"
        session["color"] = "red"
    elif int(request.form["guess"]) < int(session["match_num"]):
        session["statement"] = "Too low!"
        session["color"] = "red"
    elif int(request.form["guess"]) == int(session["match_num"]):
        session["statement"] = str(session["match_num"]) + " was the number!"
        session["color"] = "green"
        session["retry"] = "submit"
    return redirect("/")
    
@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")

app.run(debug=True)