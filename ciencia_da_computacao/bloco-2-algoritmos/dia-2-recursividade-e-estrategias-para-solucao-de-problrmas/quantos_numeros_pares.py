def conta_pares(n):
    numero_de_pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


def conta_pares_dois(n):
    numero_de_pares = 0
    for num in range(1, n + 1):
        if num % 2 == 0:
            numero_de_pares += 1
    return numero_de_pares


print(list(range(10)))
print(list(range(1, 10)))
print(conta_pares(100))
print(conta_pares_dois(100))
