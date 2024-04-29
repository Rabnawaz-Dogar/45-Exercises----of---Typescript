//define the make album system
function make_albem(artist_name, album_title, tracks) {
    var alubum = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        alubum.tracks = tracks;
    }
    return alubum;
}
// calling three function  creating 3 variabels with different values 
var album1 = make_albem("Rabnawaz", "Album title num1");
var alibum2 = make_albem("haqnawaz", "Album title num2");
// calling a make album function with third paremeters 
var alibum3 = make_albem("sadiq", "Album title num3", 10);
console.log(album1);
console.log(alibum2);
console.log(alibum3);
