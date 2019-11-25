# A function is a block of code which only runs when it is called. In Python, we do not use parentheses and curly brackets, we use indentation with tabs or spaces


def hello(name):
    print(f'hello {name}')


def sum(num1, num2):
    total = num1*num2
    return total


print(sum(3, 4))
# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression. Very similar to JS arrow functions

sum=lambda num1,num2 :num1 * num2

print(sum(2,2))