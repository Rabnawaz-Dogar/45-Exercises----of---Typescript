function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "I love typesript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printmessage, " print on shirts"));
}
//calling a function 
make_shirt();
// calling a function now with the midum size and defalut message 
make_shirt("Midum");
//calling A function now with small size and different print message
make_shirt("small", "I love javascript");
