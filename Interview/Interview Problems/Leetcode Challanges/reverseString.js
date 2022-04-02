/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // loop till the middle element
for (let i = 0; i < s.length / 2; i++) {

    //  assign first value to temp
    let temp = s[i];

    // first val will change to last
    s[i] = s[s.length - 1 - i];

    // the last value will become the first
    s[s.length - 1 - i] = temp;
}
return s;

};


console.log(reverseString(["h","e","l","l","o"]));