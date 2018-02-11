from flask import Flask, render_template, request, redirect, session
import random
import datetime

app = Flask(__name__)
app.secret_key = "Shhhh"

@app.route("/")
def index():
    if not "gold" in session:
        session["gold"] = 0
        session["log"] = []
    return render_template("index.html", your_gold=session["gold"])

@app.route("/process_money/<location>")
def process(location):
    old_log = session["log"]
    if location == "farm":
        earnings = random.randint(10,20)
    if location == "cave":
        earnings = random.randint(5,10)
    if location == "house":
        earnings = random.randint(2,5)
    if location == "casino":
        earnings = random.randint(-50,50)
    session["gold"] += earnings
    if earnings >= 0:
        earned = "Earned {} golds from the {}! ({})".format(earnings, location, datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        old_log.insert(0, ("green", earned))
    elif earnings < 0:
        lost = "Entered a {} and lost {} golds...Ouch. ({})".format(location, earnings, datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        old_log.insert(0, ("red", lost))
    session["log"] = old_log
    return redirect("/")

@app.route("/reset")
def reset():
    session.clear()
    return redirect("/")

app.run(debug=True)