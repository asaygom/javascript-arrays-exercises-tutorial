let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let wikiWoko = function(value){
    if (value==1) return "wiki"
    if (value==0) return "woko"
}

console.log(theBools.map(wikiWoko));