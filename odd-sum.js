function getOddSum(numbers){
     let sum = 0;
     let oddNumbers =[];
     for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 !=0){
            const element = numbers[i];
            sum = sum+numbers[i];
            oddNumbers.push(element);
        }
        
     }
     return {sum,oddNumbers};
}

const number = [12,46,78,54,33,77,97,20,14];
const result = getOddSum(number);
console.log(result.oddNumbers);
console.log(result.sum);
