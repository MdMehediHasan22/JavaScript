var myComputer={
    brand: 'Lenovo',
    price:39000,
    color:'Silver',
    mouse:1,
    processor:'i79'
}
console.log(myComputer);
console.log(myComputer.brand);
myComputer.processor='corei7';
console.log(myComputer);

var properties = Object.keys(myComputer);
console.log(properties);

var propertyValue =  Object.values(myComputer);
console.log(propertyValue);

//get property Values

var propertyName = 'brand';
var propertyValue = myComputer[propertyName];
console.log(propertyName,propertyValue);

//set property Values
myComputer.mouse=3;
console.log(myComputer);

myComputer['mouse']=29;
console.log(myComputer);

myComputer[propertyName]=89;
console.log(myComputer);
