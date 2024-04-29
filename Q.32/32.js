// array of curents user
var curent_user = ["Usamn", "Areeba", "Ali", "zain", "Osama"];
//Array of new user
var new_user = ["Ayesha", "Areeba", "Ali", "hamza", "Mehad"];
//loop through newuser to check for username availibilty
new_user.forEach(function (new_one_user) {
    //making a condition a user name alredy exit and save in our_condition variabels
    var our_condition = curent_user.some(function (curent_one_user) { return curent_one_user.toLocaleLowerCase() === new_one_user.toLowerCase(); });
    // print different message if else estatemnet
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " allready taken"));
    }
    else {
        console.log("this username  ".concat(new_one_user, "  is avaliabel"));
    }
});
