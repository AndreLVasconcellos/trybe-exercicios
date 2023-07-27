listA = [1, 2, 3, 4, 5, 6]
listB = [2, 4, 6, 8, 10, 12]


def intersection(listA, listB):
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    ans = []
    for item in listB:
        if item in seen_in_a:
            ans.append(item)

    return ans


print(intersection(listA, listB))
