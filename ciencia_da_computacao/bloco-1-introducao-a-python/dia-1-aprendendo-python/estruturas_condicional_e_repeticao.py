def calcula_posicao(salary):
    if salary <= 2000:
        return "estagiário"
    elif 2000 < salary <= 5800:
        return "júnior"
    elif 5800 < salary <= 7500:
        return "pleno"
    elif 7500 < salary <= 10500:
        return "senior"
    else:
        return "líder"


key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]  # identifier

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for index in range(5):
    print(index)

min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


filtered_restaurants = [
    [restaurant["name"]]  # aqui pedimos somente o nome do restaurante
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


names_list = ["Duda", "Rafa", "Cris", "Yuri"]
new_names_list = [name for name in names_list if "a" in name]

# Aqui o for percorre cada nome em "names_list",
# verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
["Duda", "Rafa"]

quadrados = [x * x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

languages = ["Python", "Java", "JavaScript"]

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
# Saída:
# 0 - Python
# 1 - Java

# Exer 12
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number + 1):
    result *= factor
result

# Exer 13
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings

# Exer 14
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:  # se o resto é zero, é divisível
        print(f"{rating} é múltiplo de 3")
