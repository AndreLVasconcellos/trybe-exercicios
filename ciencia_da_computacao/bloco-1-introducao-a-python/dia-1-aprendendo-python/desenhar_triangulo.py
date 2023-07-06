def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


def draw_triangle_inverted(n):
    for row in range(n, 0, -1):
        print(row * "*")


draw_triangle(5)
draw_triangle_inverted(5)
