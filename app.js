// This line sets my age as the value of the variable myAge. 
let myAge = 34;

// This line sets the first 2 years of a dog's life as a variable earlyYears. 
let earlyYears = 2;

// This line reassigns the earlyYears variable.
earlyYears *= 10.5;

// This line sets the variable laterYears as 2 years less than myAge.  
let laterYears = (myAge - 2);

// This line reassigns the laterYears variable.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// This line sets my age in dog years. 
let myAgeInDogYears = (earlyYears + laterYears);

// This line returns the argument in lowercase letters. 
let myName = "Erica".toLowerCase();

// This line of code concatenates the strings and variables together and prints it to the screen. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
