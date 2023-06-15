//using pop
var a = [10,20,30,40,50];
console.log(a.pop());
console.log(a);


//using push()

var b = [10,20,30];
console.log(a.push(40,50,60,70));
console.log(b);


//using shift()

var a = [10,20,30,40,50];
console.log(a.shift());
console.log(a);



//using unshift()
var a =[10,20,30,40,50];
console.log(a.unshift(1,2,3,4));
console.group(a);


var  a = [10,20,30,40,50];
var last = a.pop();
a.pop();
console.log(a.push());

console.log("--------------------");


//using slice
var a = [10,20,30,40,50];
console.log(a.slice(1));
console.log(a.slice(1,4));
console.log(a);

console.group("---------------");


//using splice
var a = [10,20,30,40,50];
console.log(a.splice(1,3));
console.log(a);
