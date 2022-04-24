/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

/*
*
The Array.prototype.filter method expects a function that returns 
a Boolean value which takes a single argument and returns true for truthy 
value or false for falsy value. 
Hence we pass the built-in Boolean function.

*/

function bouncer(arr) {
    return arr.filter(Boolean);
  }
  

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

/*
*output
[ 7, 'ate', 9 ]
[ 'a', 'b', 'c' ]
[]
[ 1, 2 ]
*/