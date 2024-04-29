//creating a function with a paremeters which return a value in string 
function country_city(city, country) {
    return ("".concat(city, ", ").concat(country));
}
//calling a function and print the returned value 
console.log(country_city("pakistan", "karachi"));
console.log(country_city("tokoyo", "japan"));
console.log(country_city("Brlin", "jerman"));
