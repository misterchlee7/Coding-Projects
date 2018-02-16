from django.shortcuts import render, redirect, HttpResponse

def index(request):
    if not "total" in request.session:
        request.session["total"] = 0
        request.session["total_qty"] = 0
    return render(request, "amadon_app/index.html")

def process(request, item):
    print item
    if item == "tshirt":
        request.session["price"] = 19.99 * float(request.POST["qty"])
    if item == "sweater":
        request.session["price"] = 29.99 * float(request.POST["qty"])
    if item == "cup":
        request.session["price"] = 4.99 * float(request.POST["qty"])
    if item == "book":
        request.session["price"] = 49.99 * float(request.POST["qty"])
    request.session["total"] += request.session["price"]
    qty_bought = int(request.POST["qty"])
    request.session["total_qty"] += qty_bought
    return redirect(checkout)

def checkout(request):
    return render(request, "amadon_app/checkout.html")

def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)