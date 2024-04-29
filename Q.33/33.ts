let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];


//using for each 
for( let one_Number of number){
    let ordinelEnding : string;

    if(one_Number == 1){
          ordinelEnding="st"
    }
    else if(one_Number == 2){
        ordinelEnding="nd"
    }
    else if(one_Number==3){
        ordinelEnding="Rd"
    }
    else{
        ordinelEnding ="th"
    }
    console.log(`${one_Number}${ordinelEnding}`)
}