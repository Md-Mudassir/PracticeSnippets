# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object


class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def ageis(self):
        return self.age


md = User('mudassir', 22)
print(md.age)

# Extend class


class Customer(User):
    # Constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance


abrar = Customer('abrar', 25)
print(abrar.ageis())

# print(bal)
