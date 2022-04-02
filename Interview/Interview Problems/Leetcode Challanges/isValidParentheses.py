""" def isValid(s):
    stack = []

    dict = {
        ']':'[',
        '}':'{',
        ')':'('
    }

    for char in s:
        if char in dict.values():
            stack.append(char)
        elif char in dict.keys():
            if stack == [] or dict[char] != stack.pop():
                return False
        else:
            return False
    #print(stack == [])
    return stack == []
    

s = "()[]{}"
isValid(s) """

def isValid(s):
    stack = ['N']
    dict = {')':'(', '}':'{', ']':'['}

    for char in s:
        if char in dict:
            if stack.pop() != dict[char]:
                return False
        else:
            stack.append(char)
    #print(len(stack) == 1)
    return len(stack) == 1
    

s = "()[]{}"
isValid(s)
