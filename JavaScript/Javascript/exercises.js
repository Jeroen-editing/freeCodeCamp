/*
function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");
console.log(reverseString("hello"));

function factorialize(num) {
    let factor = 1;
    if (num > 0) {
        for (let j = 1; j <= num; j++) {
            factor = factor * j;
        }
    }
    // no else cause factor of 0 should return 1
    return factor;
}
  
factorialize(5);
console.log(factorialize(10));

function findLongestWordLength(str) {
    const words = str.split(' ');
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
        // watch out !!!!  i < words.length NOT i <= words.length !!!  then error words[i] = undifined
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
    //return str.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWordLength(str) {
    let number = str.split(" ").reduce((longest, word) => Math.max(longest, word.length), 0);
    return number;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


function largestOfFour(arr) {
    const listOfBiggest = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        listOfBiggest[i] = largestNumber;
    }
    return listOfBiggest;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largestOfFour(arr) {
    
    //return arr.map(function(group) {
    //    newArray = group;
    //    newArray.map(function(item) {
    //        console.log(item);
    //    })
    //})
    
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function confirmEnding(str, target) {
    return target === str.substr(str.length - target.length, target.length) ? true : false;
    // maken een substring met lengte van het target en controleren of die gelijk is aan het target
}
  
confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));
confirmEnding("He has to give me a new name", "name");
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Open sesame", "same"));



function repeatStringNumTimes(str, num) {
    let newstr = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            newstr += str;
        }
    }
    return newstr;
}
  
repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));
repeatStringNumTimes("abc", -1);
console.log(repeatStringNumTimes("abc", -1));
repeatStringNumTimes("*", 8);
console.log(repeatStringNumTimes("*", 8));
repeatStringNumTimes("abc|", 3);
console.log(repeatStringNumTimes("abc|", 10));


function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));
repeatStringNumTimes("abc", -1);
console.log(repeatStringNumTimes("abc", -1));
repeatStringNumTimes("*", 8);
console.log(repeatStringNumTimes("*", 8));
repeatStringNumTimes("abc|", 3);
console.log(repeatStringNumTimes("abc|", 10));


function truncateString(str, num) {
    typeof(num) != 'number' ? num = num.length : num ;
    return str.length > num ? (str.slice(0,num) + '...') : str;
}
  
//truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket"))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));


function findElement(arr, func) {
    //pass a function as parameter and insert value as local parameter
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])) return arr[i];
    }
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9, 1, 3, 5, 9, 1, 3, 5, 9, 1, 3, 5, 9, 1, 3, 5, 9, 10], function(num) { return num % 2 === 0; }));
*/


function booWho(bool) {
    return bool === true || bool === false ? true : false;
}
  
console.log(booWho(null));
console.log(booWho(true));
console.log(booWho("true"));
console.log(booWho(false));
console.log(booWho("false"));
console.log(booWho([1,2,""]));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho("a"));