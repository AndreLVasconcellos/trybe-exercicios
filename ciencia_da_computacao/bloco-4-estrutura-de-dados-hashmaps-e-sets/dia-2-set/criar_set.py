class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

    conj5 = Conjunto()
    for i in [1, 2, 3]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)

    conj6 = Conjunto()
    for i in range(1, 11):
        conj6.add(i)

    conj7 = Conjunto()
    for i in range(10, 21):
        conj7.add(i)

    conj8 = conj6.union(conj7)
    print(conj8)

    conj9 = Conjunto()
    for i in [1, 2, 3]:
        conj9.add(i)

    conj10 = Conjunto()
    for i in [7, 2, 10]:
        conj10.add(i)

    conj11 = conj9.intersection(conj10)
    print(conj11)

    conj12 = Conjunto()
    for i in [1, 2, 3]:
        conj12.add(i)

    conj13 = Conjunto()
    for i in [7, 2, 10]:
        conj13.add(i)

    conj14 = Conjunto()
    conj15 = conj12.union(conj13)

    print(conj12.issubset(conj13))
    print(conj13.issuperset(conj12))
    print(conj14.issubset(conj15))
