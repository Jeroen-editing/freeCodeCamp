// Using the Test Method
// ---------------------
let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex; // Change this line
let result = myRegex.test(myString);


// Match Literal Strings
// ---------------------
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
//let waldoRegex = /search/; // Change this line
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);


// Match a Literal String with Different Possibilities
// ---------------------------------------------------
let petString = "James has a pet cat.";
//let petRegex = /change/; // Change this line
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);


// Ignore Case While Matching
// --------------------------
let myString = "freeCodeCamp";
//let fccRegex = /change/; // Change this line
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);


// Extract Matches
// ---------------
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


// Find More Than the First Match
// ------------------------------
let twinkleStar = "Twinkle, twinkle, little star";
//let starRegex = /change/; // Change this line
let starRegex = /twinkle/gi;
//let result = twinkleStar; // Change this line
let result = twinkleStar.match(starRegex);


// Match Anything with Wildcard Period
// -----------------------------------
let exampleStr = "Let's have fun with regular expressions!";
//let unRegex = /change/; // Change this line
let unRegex = /.un/;
let result = unRegex.test(exampleStr);


// Match Single Character with Multiple Possibilities
// --------------------------------------------------
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /change/; // Change this line
let vowelRegex = /[aeiou]/gi;
// let result = vowelRegex; // Change this line
let result = quoteSample.match(vowelRegex);