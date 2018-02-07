my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def tupling(dic):
    new_list = []

    for key, value in dic.items():
        new_list.append((key, value))
    print new_list