# Part 1

def draw_stars(list):
    for i in list:
        new_str = ""
        for rep in range(0, i):
            new_str += "*"
        print new_str


# Part 2

def draw_stars(li):
    for i in li:
        new_str = ""
        if isinstance(i, int):
            for rep in range(0, i):
                new_str += "*"
            print new_str
        elif isinstance(i, str):
            lower_i = i.lower()
            lower_i_arr = list(lower_i)
            for rep in range(0, len(lower_i_arr)):
                new_str += str(lower_i_arr[0])
            print new_str
