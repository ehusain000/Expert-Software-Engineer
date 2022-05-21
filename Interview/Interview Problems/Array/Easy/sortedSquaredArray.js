function sortedSquaredArray1(array) {
    // Write your code here.
      let newArr = [];
      if(array === []){
          return [];
      }
      for(let i = 0; i < array.length; i++){
          newArr.push(array[i] ** 2);
      }
    return newArr.sort((a, b) => a - b);
  }

  function sortedSquaredArray2(array) {
	const newArr = new Array(array.length).fill(0);
	let leftIndex = 0;
	let rightIndex = array.length - 1;
	
	for(let i = array.length - 1; i >= 0; i--){
		let left = array[leftIndex];
		let right = array[rightIndex];
		
		if(Math.abs(left) > Math.abs(right)){
			newArr[i] = left * left;
			leftIndex++;
		}else{
			newArr[i] = right * right;
			rightIndex--;
		}
	}
	
  // Write your code here.
  return newArr;
}

function sortedSquaredArray3(array) {
    // Write your code here.
      const newArr = new Array(array.length).fill(0);
      
      for(let i = 0; i < array.length; i++){
          const value = array[i];
          newArr[i] = value * value;
      }
      
      newArr.sort((a,b)=> a-b);
    return newArr;
  }
  
//test 1
console.log(sortedSquaredArray1([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray2([1, 2, 3, 5, 6, 8, 9])); 
console.log(sortedSquaredArray3([1, 2, 3, 5, 6, 8, 9]));

//test 2
console.log(sortedSquaredArray1([-5, -4, -3, -2, -1]));
console.log(sortedSquaredArray2([-5, -4, -3, -2, -1]));
console.log(sortedSquaredArray3([-5, -4, -3, -2, -1]));