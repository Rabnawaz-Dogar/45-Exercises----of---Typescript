// define a function to print each magician name from an array 
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an  array  containing magician name 
function make_greate(magician) {
    return magician.map(function (name) { return "the grate ".concat(name); });
}
var magician_name = ["Rabnwaz", "Haqnawaz", "Sadiq"];
var grate_magician = make_greate(magician_name);
show_magician(grate_magician);
