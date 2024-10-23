const friends = [12,22,34,54,62,47,89,84,33];
const partial = friends.slice(2,5);
console.log(partial);
const partial2 = friends.splice(2,3,100,200,300);
console.log(partial2);
console.log(friends);