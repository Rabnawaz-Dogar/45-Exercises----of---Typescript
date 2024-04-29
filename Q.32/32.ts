// array of curents user
let curent_user = ["Usamn", "Areeba", "Ali", "zain", "Osama"]


//Array of new user
let new_user = ["Ayesha" , "Areeba", "Ali" , "hamza" , "Mehad"]


//loop through newuser to check for username availibilty
new_user.forEach(new_one_user =>{
    //making a condition a user name alredy exit and save in our_condition variabels

   let our_condition =curent_user.some(curent_one_user => curent_one_user.toLocaleLowerCase() ===  new_one_user.toLowerCase())

   // print different message if else estatemnet
    if(our_condition){
             console.log(`sorry ${new_one_user} allready taken`)
    }
    else{
        console.log(`this username  ${new_one_user}  is avaliabel`)
    }
})