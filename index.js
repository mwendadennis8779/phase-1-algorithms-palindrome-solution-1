function reverse(word){
  return word.split("").reverse().join("")

}


function isPalindrome(word) {
  // Write your algorithm here
  const reveredWord =reverse(word);
     return word === reveredWord;
  
}

/* 
  Add your pseudocode here
  making sure the function returns a word that is a palindrome tobe true
  if the input is the same as the revered output
  return true
  else return false
  reverese the input string
  */

/*
  Add written explanation of your solution here
  .split() => transforms the word into an array since javascript cannot reverse a word
  .reverse() => reverses the order of the array
  .join("") => Changes the array to a word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
