// Ceating a array
let username = ["ADMIN", "ALI", "ZEESHAN", "MEHAD", "USMAN"] ;

//using for each loop on array
username.forEach(oneuser => {
    if (oneuser==="ADMIN"){
        console.log(` Hello ${oneuser} admin, would you like to see a status report?`)
    }
    else{
        console.log(` hello ${oneuser}  thank you for logging in again.`)
    }
})