lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


def minimum_two(numbers):
    return min(numbers)


# ou mesmo
minimum_three = min

print(minimum(lista))
print(minimum_two(lista))
print(minimum_three(lista))
