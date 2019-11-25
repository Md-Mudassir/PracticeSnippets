# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Create dict
# like objects in js
person = {
    'first_name': 'John',
    'last_name': 'Doe',
    'age': 30
}
# Get dict keys
print(person.keys())

# Get dict items
print(person.items())

# Copy dict
person2 = person.copy()
person2['city'] = 'Boston'

del(person2['age'])
print(person2)

# lists of dicts

people = [
    {'name': 'md', 'age': 22},
    {'name': 'muddu', 'age': 2}
]
print(people[0])
print(people[1]['name'])
