var gusetlist = ["rabnawaz", "haqnawaz", "ali", "hamza"];
var dontcome = gusetlist[0];
console.log(dontcome, "ya nahi a rha ga ");
gusetlist.splice(0, 1, "Amir");
gusetlist.forEach(function (gusetlist) { return console.log("Slam ".concat(gusetlist, ", would u like to dinner with me?")); });
