const arr = [1,2];
function sortMaker(arr) {
    if(arr.some(num=>num<0)){
        console.log('invalid input');
        return ;
    }

    if(arr[0]===arr[1]){
        console.log('equal');
        return;
    }
    if(arr[0]<arr[1] || arr[0]>arr[1]){
        arr.sort((a,b)=>b-a);
        return arr;
    }
}
console.log(sortMaker(arr));