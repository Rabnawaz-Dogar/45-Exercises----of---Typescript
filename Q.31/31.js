var username = ["mehad ", " ali", "zeeshan", "ADMIN", "usman"
];
username = [];
if (username.length === 0) {
    console.log("your array in empty we need to find some user!");
}
else {
    username.forEach(function (oneuser) {
        if (oneuser === "ADMIN") {
            console.log(" Hello ".concat(oneuser, " admin, would you like to see a status report?"));
        }
        else {
            console.log(" hello ".concat(oneuser, "  thank you for logging in again."));
        }
    });
}
