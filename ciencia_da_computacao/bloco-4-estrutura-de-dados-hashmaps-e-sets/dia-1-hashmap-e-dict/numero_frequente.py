def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num

    return most_frequent


nums = [1, 3, 7, 1, 3, 7, 1, 3, 1, 3, 1, 3, 7, 7, 7, 7, 7, 7, 7, 7]

print(count(nums))
