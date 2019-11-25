# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = 'mudassir'
age = 22
s='hello world'
print(name + str(age))
# String Formatting

print(f'hi {name} and age is {age}')
# String Methods

print(len(name))
print(name.find('r'))

# Ends with
print(s.endswith('d'))

# Split into a list
print(s.split())

# Find position
print(s.find('r'))

# Is all alphanumeric
print(s.isalnum())
