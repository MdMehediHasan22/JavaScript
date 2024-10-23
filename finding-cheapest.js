const phones = [
    {name:'samsung',camera:'64px',price:25000},
    {name:'iphone',camera:'64px',price:50000},
    {name:'Oppo',camera:'64px',price:30000},
    {name:'Redmi',camera:'64px',price:20000},
    {name:'One-plus',camera:'64px',price:35000},
    {name:'Vivo',camera:'64px',price:24000},
    {name:'pixel-4',camera:'64px',price:29000}
];

function findCheapest(phones){
  let cheapest = phones[0];

for(let i = 0; i<phones.length;i++){
    const phone = phones[i];
    if(phone.price<cheapest.price){
        cheapest = phone;
    }
}
return cheapest;

}

const findingCheapest = findCheapest(phones);
console.log(findingCheapest);