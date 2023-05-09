let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
//your code here
let newArr=[];

function typeofMyArr(array){
    for (let i=0;i<array.length;i++){
        newArr.push(typeof(array[i]));
    }
    console.log(newArr);
}

typeofMyArr(mix);