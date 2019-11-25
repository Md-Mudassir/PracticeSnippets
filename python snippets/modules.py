# A module is basically a file containing a set of functions to include in your application. There are core python modules, modules you can install using the pip package manager (including Django) as well as custom modules

# from camelcase import CamelCase
import datetime
from datetime import date
import time
from validator import validate_email

timestamp = time.time()

today = date.today()

print(today, timestamp)

# c = CamelCase()
# print(c.hump('hello mr world'))

email = 'test&tes.com'
if(validate_email(email)):
    print('valid')
else:
    print('invalid')
