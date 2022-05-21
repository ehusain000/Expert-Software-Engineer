function isValidSubsequence1(array, sequence) {
    // Write your code here.
      let seqIndex = 0;
      
      for(const element of array){
          if(sequence[seqIndex] === element) seqIndex++;
      }
      
      return seqIndex === sequence.length;
  }

  function isValidSubsequence2(array, sequence) {
    // Write your code here.
      let arrayIndex = 0;
      let sequenceIndex = 0;
      
      while(arrayIndex < array.length && sequenceIndex< sequence.length){
          if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
          arrayIndex++;
      }
      
      return sequenceIndex === sequence.length;
  }


  function isValidSubsequence3(array, sequence) {
    // Write your code here.
      
      let seqIndex = 0;
      
      for(let i = 0; i < array.length; i++){
          if(array[i] === sequence[seqIndex])seqIndex++;
      }
      
      return seqIndex === sequence.length;
  }
  

console.log(isValidSubsequence1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence3([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
  


