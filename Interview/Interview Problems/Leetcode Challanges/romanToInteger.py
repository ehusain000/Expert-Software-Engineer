class Solution:
    def romanToInt(s):

        #the integer starts as 0
        integerNumber = 0
        
        #we store the roman numerals in a dictionary as key value pairs
        #each roman numerals corresponds to an integer
        romans = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

        previous = 0

        #Given a string containing roman numrerals we go though each roman letters
        #we start backword from last roman letter of the string
        for roman in s[::-1]:
            
            #we declare previous, current to compare the values
            current = romans[roman]

            #if previous value is greater than the current value at hand
            #we we subtract the current value from the intger number
            #otherwise we add the current value to the integer number
            if previous > current:
                integerNumber -= current
            else:
                integerNumber += current
            
            #at each iteration previous value becomes current value
            previous = current

        #lastly we return the integer number
        print (integerNumber)
    

 
    romanToInt("III")
    #3
    """
    visualizing
    "III"
    (previous, current, integerNumber)
    (0, 1, 0)
    (1, 1, 1)
    (1, 1, 2)
    3

    """
    romanToInt("LVIII")
    #58
    """
    visualizing
    "LVIII"
    (previous, current, integerNumber)
    (0, 1, 0)
    (1, 1, 1)
    (1, 1, 2)
    (1, 5, 3)
    (5, 50, 8)
    58

    """

    romanToInt("MCMXCIV")
    #1994
    """
    visualizing
    "MCMXCIV"
    (previous, current, integerNumber)
    (0, 5, 0)
    (5, 1, 5)
    (1, 100, 4)
    (100, 10, 104)
    (10, 1000, 94)
    (1000, 100, 1094)
    (100, 1000, 994)
    1994

    """


