function booWho(bool) {
    return (bool === true || bool === false);
  }
  

  console.log(booWho(true));
  console.log(booWho(false));
  console.log(booWho(null));
  console.log(booWho([1, 2, 3]));
  console.log(booWho("true"));
  console.log(booWho("false"));


  /*
output:
true
true
false
false
false
false
*/
  