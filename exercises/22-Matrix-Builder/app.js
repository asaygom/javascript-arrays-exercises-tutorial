// Code goes here
let matrix =[];

function matrixBuilder(matrixRowAndColummns){
    let matrixRow=[];
    for (let i=0;i<matrixRowAndColummns;i++){
        matrixRow[i]=(Math.floor(Math.random()*2))
        }
    for (let j=0;j<matrixRowAndColummns;j++){

            matrix[j] = matrixRow;
    }
    
    return matrix
}



// do not change anything from this line down
console.log(matrixBuilder(5))