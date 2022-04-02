/* 1) Specifications:
//pre: inputs string s
//post: returns an integer


/*
* 2) Design Idea
* we first try to understand how roman numerals should be defined and stored
* javaScript provides a nice way to store this using dictionaries
*       "I": 1, //lamedh
        "V": 5, //vee
        "X": 10, //ex
        "L": 50, //ell
        "C": 100, //gimel
        "D": 500, //daleth
        "M": 1000 //em
* 
* each roman numerals corresponds to an integer value
*/


/**
 * @param {string} s
 * @return {number}
 */

//3) code

var romanToInt = function(s) {
    romans = {
        "I": 1, //lamedh
        "V": 5, //vee
        "X": 10, //ex
        "L": 50, //ell
        "C": 100, //gimel
        "D": 500, //daleth
        "M": 1000 //em
    }
    
    let integer = 0; //number
    
    for (let i = 0; i < s.length; i++){

        const current = romans[s[i]], next = romans[s[i+1]];
        console.log(s[i],current, s[i+1], next, "integer", integer);
        if(current < next){
            integer -= current;
        }else{
            integer += current;
        }


    }
    return integer;
};

/*
4)Testing
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
console.log(romanToInt("MCMXCIV"));





