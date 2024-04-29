// define a function to print each magician name from an array 
function show_magician(magician:string[]){
    magician.forEach(name => console.log(name))
}



// function the magicias the grate through .map() it will be modify the array
function make_greate(magician:string[]){
 return magician.map(name => `the grate ${name}`)
}



let  magician_name = ["Rabnwaz", "Haqnawaz","Sadiq"]

// call make_grate function to modify magicains name 
let grate_magician = make_greate(magician_name)

//call show_magicians that show modifies list of magicians
show_magician(grate_magician)