function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perchairWood = 6;
    const pertableWood = 10;
    const perbedWood = 16;

    totalWood=perchairWood*chairQuantity+pertableWood*tableQuantity+perbedWood*bedQuantity;

    return totalWood;
}

const result = woodCalculator(2,1,1);
console.log(result);
