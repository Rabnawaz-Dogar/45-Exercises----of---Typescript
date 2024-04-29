// define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var twenty = 20;
var ten = 10;
var fruits = ["apple", "banana", "kiwi"];
//Tests for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == apple);
console.log("Is apple is not equal to apple ");
console.log(apple != apple);
// tests using lower case funtion
console.log(" Is apple is equal to apple after coverting to lowercase ");
console.log(uppercaseApple.toLowerCase() == apple);
console.log(" Is APPLE  is not equal to apple after coverting to lowercase ");
console.log(uppercaseApple.toLowerCase() != apple);
//Numericals  tests
console.log("\n Is ten is equal to twenty ");
console.log(ten == twenty);
//not equal to
console.log("\n ten is not equal to twenty");
console.log(ten != twenty);
//grweater than 
console.log("\n Is ten is greater than zero");
console.log(10 > 0);
//less tan
console.log("\n Is twenty less than ten");
console.log(twenty < ten);
//Greater than equal to 
console.log("\n ten is greater than or equal 5");
console.log(ten >= 5);
//less than or equal to 
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// Test using "AND" & "or" opraters
//&&
console.log("\n twenty is not equal to ten && twenty is grater  to ten ");
console.log(twenty != ten && twenty > ten);
console.log("\n twenty is not equal to ten && twenty is grater  to ten ");
console.log(twenty != ten && twenty > 30);
//using . (or)
console.log("\n twenty is greater than 50 OR 20 is equal to 20  ");
console.log(twenty > 50 || 20 == 20);
//false
console.log("\n twenty is greater than 50 OR 20 is not equal to 20  ");
console.log(twenty > 50 || 20 != 20);
// Test whether an item is include in a array
console.log("\n Is orange include in my fruits array ");
console.log(fruits.includes("apple"));
// not include
console.log("\n Is orange not include my fruits array ");
console.log(fruits.includes("orange"));
