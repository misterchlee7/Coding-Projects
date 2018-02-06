def multi_table():
    for row in range(0,13):
        row_str = ""
        for col in range(0,13):
            if row == 0 and col == 0:
                row_str += "X  "
            elif row == 0:
                row_str += str(col) + "  "
            elif col == 0:
                row_str += str(row) + "  "
            else:
                row_str += str(row*col) + "  "
        print row_str