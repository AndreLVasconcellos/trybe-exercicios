def get_repeat(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num in seen_before:
            repeated.add(num)
        else:
            seen_before.add(num)

    return repeated


if __name__ == "__main__":
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]

    print(get_repeat(nums))
