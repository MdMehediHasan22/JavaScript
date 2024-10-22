function add(num1,num2){
    console.log(num1,num2);
    var sum = num1+num2;
    return sum;
}
var total = add(12,33);
console.log(total);

//example

function bringSingara(money){
    var singaraPrice=10;
    var quantity = money/singaraPrice;
    return quantity;
}
var singaras = bringSingara(200);
console.log(singaras);