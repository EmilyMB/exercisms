def difference(x):
    return square_of_sum(x) - sum_of_squares(x)

def square_of_sum(x):
    return sum(range(x+1))**2

def sum_of_squares(x):
    return sum(k**2 for k in range(x+1))
