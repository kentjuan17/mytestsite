x = 0
# print(x) # comment
def greet(name) :
    print('Hello there,', name + '!')

while (x <= 10) :
    if (x % 2 == 0) :
        print(x, ' is even')
    else :
        print(x, ' is odd')
    x = x + 1

if (x == 11) :
    name = input('Please enter your name: ')
    greet(name)

# Measure some strings:
words = ['Kody', 'Khloe', 'Kristine', 'Kent']
for word in words:
    print(word, len(word))

# Create a sample collection
users = {
    'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'
}
# Strategy: Iterate over a copy
for user, status in users.copy().items():
    if status == 'inactive':
        del users[user]
print(users)
# Strategy: Create a new collection
active_users = {}
for user, status in users.items():
    if status == 'active':
        active_users[user] = status