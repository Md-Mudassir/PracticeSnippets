# JSON is commonly used with data APIS. Here how we can parse JSON into a Python dictionary
import json
# sample
userJSON = '{"first_name": "John", "last_name": "Doe", "age": 30}'

user = json.loads(userJSON)

print(user)
print(user['last_name'])
