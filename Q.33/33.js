var number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//using for each 
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var one_Number = number_1[_i];
    var ordinelEnding = void 0;
    if (one_Number == 1) {
        ordinelEnding = "st";
    }
    else if (one_Number == 2) {
        ordinelEnding = "nd";
    }
    else if (one_Number == 3) {
        ordinelEnding = "Rd";
    }
    else {
        ordinelEnding = "th";
    }
    console.log("".concat(one_Number).concat(ordinelEnding));
}
