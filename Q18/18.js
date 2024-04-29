var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a arrya of countries and print its orignal order 
var countrytovist = ["china", "dmark", "brazil", "aribia"];
console.log("orignal order", countrytovist);
// Print  array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:", __spreadArray([], countrytovist, true).sort());
//show that the array is still in the orignal order 
console.log("still in orignal order", countrytovist);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse  order ", __spreadArray([], countrytovist, true).reverse());
//show that the array is still in the orignal order 
console.log("still in orignal order", countrytovist);
// we have chaged the orignal array order now
console.log("orignal array revers", countrytovist.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to orignal order", countrytovist.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(" alphabetical order origanla array", countrytovist.sort());
// we have chaged the orignal array order now
console.log("revers alphabatical", countrytovist.reverse());
