import re


def validar_email(email):
    padrao = r"^[a-zA-Z][\w-]*@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$"

    if re.match(padrao, email):
        return True
    else:
        raise ValueError("Endereço de e-mail inválido!")


# Exemplo de uso:
try:
    email = input("Digite um endereço de e-mail: ")
    validar_email(email)
    print("Endereço de e-mail válido!")
except ValueError as error:
    print(str(error))
