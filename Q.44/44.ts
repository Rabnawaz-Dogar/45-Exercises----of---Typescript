//Define a function with a rest paremeters that accepts items argments representing our sandwich

function MakeSandwich(...items:string[]){
    console.log("\nMaking sandwich with following items: \n ")

    items.forEach(singleitmes => console.log(singleitmes))
    console.log(" \n Now enjoy Sandwich\n")
}

//call the function 3 times with 3 differents number of arguments 
MakeSandwich("chicken", "chese", "mayo", "egg");

MakeSandwich("bread", "butter");

MakeSandwich("bread" , "butter" ,"egg", "mayoness", "tamato"
)