let gusetlist = ["rabnawaz","haqnawaz","ali","hamza"];

let dontcome = gusetlist[0]

console.log(dontcome, "ya nahi a rha ga ")

gusetlist.splice(0, 1, "Amir");

gusetlist.forEach(gusetlist => console.log(`Slam ${gusetlist}, would u like to dinner with me?`))
