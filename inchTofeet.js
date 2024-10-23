function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}

const height = 144;
const feet = inchToFeet(height);
console.log(feet);

function mileToKm(miles){
    const km = miles*1.60934;
    return km;
}
const distance = 1000;
const km = mileToKm(distance);
console.log(km);