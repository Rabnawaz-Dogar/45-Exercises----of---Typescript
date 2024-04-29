

//define the make album system
function make_albem(artist_name:string , album_title:string, tracks?:number){
    let alubum : {artist :string,  title:String , tracks?:number}    = {
        artist :artist_name,
        title : album_title,

    };
    if(tracks !== undefined){
           alubum.tracks = tracks;
    }
    return alubum;
}

// calling three function  creating 3 variabels with different values 

 let album1 = make_albem("Rabnawaz", "Album title num1");
let alibum2 =make_albem("haqnawaz", "Album title num2");
// calling a make album function with third paremeters 
let alibum3 =make_albem("sadiq", "Album title num3",10);
 console.log(album1)
 console.log(alibum2)
 console.log(alibum3)

