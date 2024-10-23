function isLeapYear(year){
    if(year%4==0){
       return true
    }
    else{
        return false;
    }
    

}
const myYear = isLeapYear(2025);
console.log(myYear);

const herYear = isLeapYear(2020);
console.log(herYear);
