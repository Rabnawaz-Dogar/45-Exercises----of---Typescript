// define a function to print each magician name from an array 
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an  array  containing magician name 
var magician_name = ["harray porter", "Rabnawaz", "Haqnawaz"];
// call the function to print each magician name 
show_magician(magician_name);
