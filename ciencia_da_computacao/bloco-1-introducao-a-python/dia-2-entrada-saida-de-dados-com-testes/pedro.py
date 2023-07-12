# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)


def imprimir_escada_invertida(nome):
    for i in range(len(nome), 0, -1):
        print(nome[:i])


nome = input("Digite um nome: ")
imprimir_escada_invertida(nome)
