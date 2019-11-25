# A List is a collection which is ordered and changeable. Allows duplicate members.

# create
numbers = [1, 2, 4, 3]

# constructors
num2 = list((1, 2, 3, 2))

print(num2, numbers)

fruits = ['apple', 'oranges', 'grapes']
fruits.append('honey')


# Change value
fruits[0] = 'Blueberries'

# Remove with pop
fruits.pop(2)

# Reverse list
fruits.reverse()

# Sort list
fruits.sort()

# Reverse sort
fruits.sort(reverse=True)
print(fruits)
