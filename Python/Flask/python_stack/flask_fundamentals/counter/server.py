from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Shhhh"

@app.route("/")
def index():
    if not "login_num" in session:
        session["login_num"] = 1
    else:
        session["login_num"] += 1
    
    return render_template("index.html", counter=session["login_num"])

@app.route("/by2")
def by2():
    session["login_num"] += 1
    return redirect("/")

@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")

app.run(debug=True)