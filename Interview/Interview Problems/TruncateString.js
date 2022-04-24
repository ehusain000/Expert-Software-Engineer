function truncateString(str, num) {
    /*if the length of the input string is larger than the number(num) mentioned
    * then we use the slice method to start at the 0 index and slice up to num
    * num index is excluded as we have started from index 0
    * afte we have sliced the given string we simply concatenate ... as + "..."
    * otherwise if the length of the input string is smaller than num,
    * we do not have to do anything so we simply return the string
    */
    if(str.length > num){
      return str.slice(0,num) + "...";
    }else{
    return str;
  }
  }
  
  //testing with different outputs
  console.log(truncateString("Hi There!", 9));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));