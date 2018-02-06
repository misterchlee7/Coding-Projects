def checkerboard():
    for row in range(0, 9):
        row_str = ""
        for col in range(0, 9):
            if row % 2 == 0:
                if col % 2 == 0:
                    row_str += "*"
                elif col % 2 != 0:
                    row_str += " "
            elif row % 2 != 0:
                if col % 2 == 0:
                    row_str += " "
                elif col % 2 != 0:
                    row_str += "*"
        print row_str        
