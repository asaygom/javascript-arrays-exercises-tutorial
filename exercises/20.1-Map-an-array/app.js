let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	return (value *1.8)+32
});

console.log(arrayOfFahrenheitValues);