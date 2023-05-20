// Add your code here
const lyricsGenerator = (anyArray) =>{
    let lyrics ="";
    let comodin ="";
for (let i=0;i<anyArray.length;i++){
    anyArray[i]==0 ? lyrics += "Boom " : comodin=1;
    anyArray[i]==1 ? lyrics += "Drop the base " : comodin=1;
    anyArray[i-2]==1 && anyArray[i-1]==1 && anyArray[i]==1 ? lyrics += "!!!Break the base!!! " : comodin=1;    
}
return lyrics
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))