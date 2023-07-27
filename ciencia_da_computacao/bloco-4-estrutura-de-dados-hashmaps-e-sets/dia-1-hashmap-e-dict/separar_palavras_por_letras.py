"""Separe as palavras de acordo com sua letra inicial"""

texto = ["Ana", "ama", "Joao", "que", "ama", "Maria", "que", "odeia", "mais"]


def screening(texto):
    letras = {}
    for palavra in texto:
        first_letter = palavra[0]
        if first_letter not in letras:
            letras[first_letter] = [palavra]
        else:
            letras[first_letter].append(palavra)
    return letras


print(screening(texto))

for key, value in screening(texto).items():
    print(f"{key}: {value}")
