//function declaration
function startFan(){
    console.log('Stand Up');
    console.log('Walk towards the switch');
    console.log('Press the Switch');
}

//call function
startFan();

function sum(a,b,c,d,e){
    var sum = a+b+c+d+e;
    console.log('Sum of :',a,b,c,d,e);
    return sum;
}
var calculate = sum(2,5,4,8,7);
console.log(calculate);