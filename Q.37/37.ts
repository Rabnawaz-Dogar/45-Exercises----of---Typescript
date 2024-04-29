function make_shirt(size:string = "large", printmessage:string ="I love typesript")
{
console.log(`creating a ${size} shirt with the ${printmessage} print on shirts`)
}

//calling a function 
make_shirt();


// calling a function now with the midum size and defalut message 
make_shirt("Midum")

//calling A function now with small size and different print message

make_shirt("small", "I love javascript")