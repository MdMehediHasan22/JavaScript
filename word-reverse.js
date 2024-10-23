function reverseWords(str){
    const word = str.split(' ');
    const result =[];
    for(let i = word.length-1;i>=0;i--){
        const element = word[i];
        result.push(element);
    }
    const reverserd = result.join();
    return reverserd;
}
const str = 'I am a good boy';
result = reverseWords(str);
console.log(result);