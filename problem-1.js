function cubeNumber(number) {
    const result = Math.pow(number,3);
    if(typeof number !='number'){
        console.log('enter valid number');
    }
    return result;
}

const input = cubeNumber('a');
console.log(input);