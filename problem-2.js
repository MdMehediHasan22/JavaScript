function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string' || !string1 || !string2){
       console.log('invalid input');
       return false;
    }
    else if(string1.includes(string2))
    return true ;
}

console.log(matchFinder('javascript','script'));