var student = [22,55,43,7,2,9];
var nameStudent = ['Rahim','Karim','Jasim','Miraj'];
nameStudent.push('gelam');
console.log(nameStudent);
console.log(nameStudent.length);
console.log(student);
console.log(student.length);

// index
var element1 =student[0];
console.log(element1);
var noOfStudent = nameStudent[3];
console.log(noOfStudent);

// set
student[2]=12;
console.log(student);
// find index of an element

var positionIndex =student.indexOf(2);
console.log(positionIndex);

var numbers= [78,44,56,22];
numbers.push(63);
numbers.pop();
console.log(numbers);

numbers.unshift(31);
console.log(numbers);

numbers.shift();
console.log(numbers);

//use of splice
numbers.splice(0,2);
console.log(numbers);