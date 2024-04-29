// Ceating a array
var username = ["ADMIN", "ALI", "ZEESHAN", "MEHAD", "USMAN"];
//using for each loop on array
username.forEach(function (oneuser) {
    if (oneuser === "ADMIN") {
        console.log(" Hello ".concat(oneuser, " admin, would you like to see a status report?"));
    }
    else {
        console.log(" hello ".concat(oneuser, "  thank you for logging in again."));
    }
});
