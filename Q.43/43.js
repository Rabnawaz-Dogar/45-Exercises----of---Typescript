//define a function to print each magician name from an array 
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// function the magicias the grate through .map() it will be modify the array
function make_greate(magician) {
    return magician.map(function (name) { return "the grate ".concat(name); });
}
var magician_name = ["Rabnwaz", "Haqnawaz", "Sadiq"];
// call make_grate function to modify magicains name 
var grate_magician = make_greate(magician_name);
//call show_magicians that show modifies list of magicians
show_magician(grate_magician);
//Making a copy of orignal array through .slice()  function 
var copy_magicianc_names = magician_name.slice();
//Modify the copy array to iclude "The grste" with there names 
var copy_grate_magicians = make_greate(copy_magicianc_names);
//show both arryas orginal nad copied 
//orignal
console.log("Orignal arrays\n");
show_magician(magician_name);
//copy
console.log("\n copied arryas \n");
show_magician(copy_grate_magicians);
