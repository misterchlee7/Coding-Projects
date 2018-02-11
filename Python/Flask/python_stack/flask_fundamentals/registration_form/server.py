from flask import Flask, render_template, request, redirect, session, flash
import re
import datetime

app = Flask(__name__)
app.secret_key = "Shhhhh"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PW_REGEX = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
    session["email"] = request.form["email"]
    session["first_name"] = request.form["first_name"]
    session["last_name"] = request.form["last_name"]
    bday = request.form["birthday"]
    pw = request.form["pw"]
    pw_confirm = request.form["pw_confirm"]

    def date_validation(bday):
        try:
            if datetime.datetime.strptime(bday, "%m-%d-%Y"):
                if datetime.datetime.strptime(bday, "%m-%d-%Y") > datetime.datetime.now():
                    flash("Your birthday can't be in the future...")
        except ValueError:
            flash("Birthday format incorrect. Must write in MM-DD-YYYY format")
    if len(session["email"]) < 1 or len(session["first_name"]) < 1 or len(session["last_name"]) < 1 or len(pw) < 1 or len(pw_confirm) < 1:
        flash("All fields MUST be completed")
    if not session["first_name"].isalpha() or not session["last_name"].isalpha():
        flash("First and last name CANNOT contain numbers or symbols")
    if not PW_REGEX.match(pw) or not PW_REGEX.match(pw_confirm):
        flash("Password must be AT LEAST 8 characters long and contain AT LEAST 1 uppercase letter and 1 number")
    if not EMAIL_REGEX.match(session["email"]):
        flash("Email is not written in proper format. e.g. someone@email.com")
    if not pw == pw_confirm:
        flash("Password and Password Confirmation DOES NOT match. Please type again")

    date_validation(bday)
    return redirect("/")

app.run(debug=True)