import random


def embaralhar_palavra(palavra):
    palavra_embaralhada = "".join(random.sample(palavra, len(palavra)))
    return palavra_embaralhada


def carregar_palavras_do_arquivo(nome_arquivo):
    palavras = []
    with open(nome_arquivo, "r") as arquivo:
        for linha in arquivo:
            palavra = linha.strip()
            palavras.append(palavra)
    return palavras


def jogar():
    palavras = carregar_palavras_do_arquivo("words.txt")
    palavra_sorteada = random.choice(palavras)
    palavra_embaralhada = embaralhar_palavra(palavra_sorteada)

    print("Bem-vindo ao Jogo da Palavra Embaralhada!")
    print("Tente adivinhar a palavra correta.")
    print("A palavra embaralhada é:", palavra_embaralhada)

    tentativas = 3
    while tentativas > 0:
        resposta = input("Digite sua resposta: ")

        if resposta == palavra_sorteada:
            print("Parabéns! Você acertou!")
            return

        print("Resposta incorreta!")
        tentativas -= 1
        if tentativas > 0:
            print(
                "Tente novamente. Você tem mais", tentativas, "tentativa(s)."
            )

    print(
        "Suas tentativas acabaram! A palavra correta era",
        palavra_sorteada + ".",
    )
    print("Você perdeu o jogo!")


jogar()
