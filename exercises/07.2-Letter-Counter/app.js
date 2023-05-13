let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let letter = "";

// your code here
for (let i=0;i<par.length;i++){
    if (par.charAt(i)!=" "){
    letter = par.charAt(i).toLowerCase()
    if (counts[letter]){
        counts[letter]++;
    } else {counts[letter]=1;}
    }
}

console.log(counts);