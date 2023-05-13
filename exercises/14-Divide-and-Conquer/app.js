let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];
let odd_numbers=[];
let even_numbers=[];


// your code here

function mergeTwoList(array){
    for (let i=0;i<array.length;i++){
        if (array[i]%2!==0){
            odd_numbers.push(array[i]);
        }
        if (array[i]%2==0){
            even_numbers.push(array[i]);
        }
    }
    
    return odd_numbers.concat(even_numbers);
}

console.log(mergeTwoList(list_of_numbers));