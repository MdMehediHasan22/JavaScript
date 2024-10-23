function factorial(num){
    let fact = 1;
    for(let i =1;i<=num;i++){
         fact =fact*i;
    }
 return fact;
}
const number = factorial(5);
console.log(number);

//using while loop

function factorial2(number1){
    let i = number1;
    let result =1;
    while(i>=1){
        result=result*i;
        i--;
    }
    return result;

}
const factOrial = factorial2(7);
console.log(factOrial);
//mcq
function print(a, b, c){

    return a+2;
   
    return a*b;
   
    return b*c+a;
   
   }
   
   console.log(print(1,2,3));