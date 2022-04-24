/* given two arrays and an index, we are to copy each element
 * of the first array into the second array in order.
* we begin inserting at elements at index n of the second array
* we return a resulting array (a new array with updated elements)
* we do not change the input arrays
*/

//given two arrays arr1, arr2 and an index n
function frankenSplice(arr1, arr2, n) {

    //we first declare a temporary array or new array
    //which will contain the updated values
    //lets call this array resultingArray
    //resultingArray will hold all the elements of arr2
    let resultingArray = arr2.slice();

    //now we insert at index n of the resultingArray all the elements
    //of arr1 starting from 0 index to the end of the array(arr1)
    resultingArray.splice(n, 0, ...arr1);

    //we then return the newly updated resultingArray
    return resultingArray;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice([1, 2], ["a", "b"], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  console.log(frankenSplice([1, 2, 3, 4], [], 0));

  /* 
  *outputs
    [ 4, 1, 2, 3, 5, 6 ]
    [ 'a', 1, 2, 'b' ]
    [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
    [ 1, 2, 3, 4 ]
  */