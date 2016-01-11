// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function


// * Place "use strict" at the top of your file to invoke strict mode
// * Create an additional function called `truncateCharacters` and repeat this experiment truncating by characters instead of words
// * Modify your Function so that it can be called without the `numWords` argument (if no `numWords` is supplied it should use a default number of words to truncate)
// * Modify your Function so that instead of returning a single String value it returns an Object that contains the following information:
//   * `originalText` (original text that was sent to the function)
//   * `wordCount` (count of the number of words in original text)
//   * `numWords` (the original number that was sent in)
//   * `shortText` (truncated String)
//   * (Don't forget to modify your console.log statements to properly show all this info about the object.)

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
'use strict'
function truncatewords(longText, numWords) {
//var shortText = truncateWords(originalText, wordLimit);

 if (typeof numWords === 'undefined') {
   numWords = 7;} 
// 1. Use the split() function to split the String into an Array
var splittext= longText.split(" ");


// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
splittext.splice(numWords, 
                 (splittext.length-numWords) //splittext.length determines length of array Logic determines how many words to remove from string
                 ,'...'); //inserts elipses

// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function
console.log('originalText: ' + longText);
//console.log('shortText: ' + shortText);
console.log('shortText: ' + splittext.join(" "));
}

truncatewords("There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.")

function truncateCharacters(longText, numCharacters) {
//var shortText = truncateWords(originalText, wordLimit);

// 1. Use the split() function to split the String into an Array
var splitTextChar= longText.split("");


// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
splitTextChar.splice(numCharacters, 
                 (splitTextChar.length-numCharacters) //splittext.length determines length of array Logic determines how many words to remove from string
                 ,'...'); //inserts elipses

// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function
console.log('originalText: ' + longText);
//console.log('shortText: ' + shortText);
console.log('shortText: ' + splitTextChar.join(""));
}
truncateCharacters("There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.",8)

function truncateObject(longText, numWords) {
//var shortText = truncateWords(originalText, wordLimit);

 if (typeof numWords === 'undefined') {
   numWords = 7;} 
// 1. Use the split() function to split the String into an Array
var splittext= longText.split(" ");


// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
splittext.splice(numWords, 
                 (splittext.length-numWords) //splittext.length determines length of array Logic determines how many words to remove from string
                 ,'...'); //inserts elipses

// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function
var obj = {
//   * `originalText` (original text that was sent to the function)
 originalText: ('originalText: ' + longText), 
//   * `wordCount` (count of the number of words in original text)
wordCount: splittext.length,
//   * `numWords` (the original number that was sent in)
numWords: numWords,
//   * `shortText` (truncated String)
shortText: 'shortText: ' + splittext.join(" ")

};
  
 console.log(obj)
// console.log('originalText: ' + longText);
// //console.log('shortText: ' + shortText);
// console.log('shortText: ' + splittext.join(" "));
}

truncateObject("There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.")
