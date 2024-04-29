 // creating a gusrt list arry 
 let  gusetlist =["rabnawaz","haqnawaz","ali","hamza"];

 //making variables for those guset who cant come 
 let dontcome = gusetlist[0]

 //print the gust who canot come 
 console.log(dontcome, "rabnawaz nahi asakta ha ");

 //remove a first guset and  add a new guset 
 gusetlist.splice(0,1, "amir");

 // messaged that we have a biger table 
 console.log("Good news ! we have fond a biger table of dinner");


 //adding a new value at a starting point 
gusetlist.unshift("imran")


//adding a new value list end point 
gusetlist.push("zain")

//get a middel index  of our guest list array 
let middlelist : number = Math.floor(gusetlist.length / 2);

//adding a new guset to middel index of array 
gusetlist.splice(middlelist, 0, "osma")


// print meaasge of update list 
console.log("update list fot our guset ")

//sending a ivitation message to our gusets one by one thier name
gusetlist.forEach(oneguset => console.log(`salam ${oneguset}, would you like dinner with me ` ))


