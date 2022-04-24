/* 
* We are to title case a Sentence.
* we are to return the provided string with the first letter of each word capitalized. 
* we have to make sure the rest of the word is in lower case.
*/
//given a string
function titleCase(str) {
    //we first convert all the characters to lower case than split each words
    // in the sentence and store in an array
    const newTitle = str.toLowerCase().split(" ");

    //initialize an empty array
    const updatedStr = [];

    //loop through the array that contains the splitted words of str
    //take the first letter of the sentence and convert to uppercase
    // using slice take all other letters of the word and
    // concatenate to the first letter(uppercase letter)
    // store the new word in updatedStr
    for (let i in newTitle){
      updatedStr[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1);
    }

    //using join combine all the words of updatedStr to return the Title case Sentence
    return updatedStr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
  //I'm A Little Tea Pot