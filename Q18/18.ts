//making a arrya of countries and print its orignal order 
let countrytovist : string [] = ["china", "dmark", "brazil", "aribia" ]

console.log("orignal order", countrytovist)

// Print  array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:", [...countrytovist].sort())

//show that the array is still in the orignal order 
console.log("still in orignal order",countrytovist)


// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse  order ", [...countrytovist].reverse());
//show that the array is still in the orignal order 
console.log("still in orignal order",countrytovist)



// we have chaged the orignal array order now
console.log("orignal array revers", countrytovist.reverse())
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to orignal order", countrytovist.reverse())



//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(" alphabetical order origanla array",countrytovist.sort())


// we have chaged the orignal array order now
console.log("revers alphabatical",countrytovist.reverse())