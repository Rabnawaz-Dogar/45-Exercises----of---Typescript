//Define a function with a rest paremeters that accepts items argments representing our sandwich
function MakeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with following items: \n ");
    items.forEach(function (singleitmes) { return console.log(singleitmes); });
    console.log(" \n Now enjoy Sandwich");
}
//call the function 3 times with 3 differents number of arguments 
MakeSandwich("chicken", "chese", "mayo", "egg");
MakeSandwich("bread", "butter");
MakeSandwich("bread", "butter", "egg", "mayoness", "tamato");
