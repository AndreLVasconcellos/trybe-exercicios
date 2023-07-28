def tamanho_maior_substring_sem_repeticao(string):
    n = len(string)
    if n == 0:
        return 0

    char_set = set()
    max_len = 0
    left, right = 0, 0

    while right < n:
        if string[right] not in char_set:
            char_set.add(string[right])
            max_len = max(max_len, right - left + 1)
            right += 1
        else:
            char_set.remove(string[left])
            left += 1

    return max_len


# Exemplo de uso:
string = "serdevemuitolegalmasehprecisoestudarbastante"
print(tamanho_maior_substring_sem_repeticao(string))  # Saída: 9
