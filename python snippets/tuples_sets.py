# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.

# create

fruits = ('apple', 'orange', 'watermelon')
print(fruits)

fruits1 = fruits
print(type(fruits1))

# A Set is a collection which is unordered and unindexed. No duplicate members.
fruits_set = {'apple', 'orange'}
fruits_set.add('apple')
fruits_set.add('Grape')

# fruits_set.clear()
print(fruits_set)
