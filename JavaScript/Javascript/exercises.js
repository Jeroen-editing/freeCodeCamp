let input_box = document.getElementById('input');
let output = [];
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


function titleCase(str) {
    // make an object of it
    let tempStr = str.split(" ");
    let updateStr = [];
    // loop over all object properties AND do same thing with them
    for (let i in tempStr) {
        // new str = first letter of each propertie to uppercase + remain (=slice) of propertie to lowercase
        updateStr[i] = tempStr[i][0].toUpperCase() + tempStr[i].slice(1).toLowerCase();
    }
    // return and re-join the object to 1 string
    return updateStr.join(" ");
}

function titleCaseTwo(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
 
output = titleCase("I'm a little tea pot");
output = titleCaseTwo("If I could, I would invent a special method for doing this ;)");
output = titleCase("sHoRt AnD sToUt");
output = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")



function frankenSplice_A(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    console.log(typeof(newArr))
    return newArr;
}
output = frankenSplice_A([1, 2, 3], [4, 5, 6], 1);
output = frankenSplice_A([1, 2, 3], [4, 5], 1);
output = frankenSplice_A([1, 2], ["a", "b"], 1);
output = frankenSplice_A(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
output = frankenSplice_A([1, 2, 3, 4], [], 0);
output = frankenSplice_A(["head", "shoulders", "knees", "toes"], [1, 2, 3, 4], 1);

function frankenSplice_B(arr1, arr2, n) {
    let newArr = [...arr2];
    newArr.splice(n, 0, ...arr1);
    console.log(typeof(newArr))
    return newArr;
}
output = frankenSplice_B([1, 2, 3], [4, 5, 6], 1);
output = frankenSplice_B([1, 2, 3], [4, 5], 1);
output = frankenSplice_B([1, 2], ["a", "b"], 1);
output = frankenSplice_B(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
output = frankenSplice_B([1, 2, 3, 4], [], 0);
output = frankenSplice_B(["head", "shoulders", "knees", "toes"], [1, 2, 3, 4], 1);



function bouncer(arr) {
    let newArr = [];
    for (let i in arr) {
        if(arr[i]) newArr.push(arr[i]);
        //console.log(newArr);
    }
    return newArr;
}
output = bouncer([7, "ate", "", false, 9]);
output = bouncer(["a", "b", "c"]);
output = bouncer([false, null, 0, NaN, undefined, ""]);
output = bouncer([null, NaN, 1, 2, undefined]);



function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b) => a - b);
    return arr.indexOf(num);
} 
output = getIndexToIns([40, 60], 50);
output = getIndexToIns([60,45,99,11,77,150,63,86,24,18,12,55], 52);



function mutation(arr) {
    let answer = true;
    let baseStr = arr[0].toLowerCase();
    let testStr = arr[1].toLowerCase();
    console.log(baseStr);
    console.log(testStr);
    for(let i in testStr) {
        //!baseStr.includes(testStr[i]) ? answer = false : answer === false ? answer = false : answer = true;
        if(!baseStr.includes(testStr[i])) answer = false;
    }
    return answer;
} 
//output = mutation(["hello", "hey"]);
//output = mutation(["hello", "Hello"]);
//output = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
//output = mutation(["Mary", "Aarmy"]);
output = mutation(["voodoo", "ooooooooozooooo"]);
output = mutation(["Noel", "Ole"]);




function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    console.log("[["+newArr[0]+"]["+newArr[1]+"]]");
    return "[ [ "+newArr[0]+" ] [ "+newArr[1]+" ] ]";
}
output = chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/



//----------- OBJECTS --------------------------
//==============================================

//--------- task 1, 2, 3
/*
let dog = {
    name: "Spunch",
    numLegs: 5,
    //sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}  //------ can shorter ---- task 3
    //sayLegs: () => {return "This dog has " + dog.numLegs + " legs."} //------ can shorter ---- task 3
    //sayLegs: () => "This dog has " + dog.numLegs + " legs." //------ can shorter ---- task 3
    sayLegs: function() {return "This dog has " + this.numLegs + " legs."} //------- remeber only works with a regular function
};
console.log(dog.name + dog.numLegs);
let task2 = dog.name + " has " + dog.numLegs + " legs";
let task3 = dog.sayLegs();
output = task2;
output = task3;

function Dog() {
    this.name = "Spunch";
    this.color = "greenish";
    this.numLegs = 5;
}

let stupidDog = new Dog();
stupidDog.name = "Scuffy";
output = stupidDog.color + " " + stupidDog.name;

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 5;
}
let terrier =  new Dog("Jull", "blue");
output = terrier.color + " " + terrier.name;



function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(6);
let hisHouse = {
    numBedrooms: 4
};
output = myHouse instanceof House;   //-------- true
output = hisHouse instanceof House;   //-------- false



function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];

for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
output = ownProps;



function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
output = beagle.numLegs;
*/


function Dog(name) {
    this.name = name;
}  
Dog.prototype.numLegs = 4; 
let beagle = new Dog("Snoopy");
  
let ownProps = [];
let prototypeProps = [];
for(let property in beagle) {
    beagle.hasOwnProperty(property) ? ownProps.push(property) : prototypeProps.push(property);
}

output = "Own propertys: " + ownProps + ".<br> Prototype propertys: " + prototypeProps + ".";
input_box.innerHTML = output;