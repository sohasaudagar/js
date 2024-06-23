const score=100
const balance= new Number(100)
//number ke funcn
console.log(balance.toString());
console.log(balance.toFixed(2));

const anothernum=23.897
console.log(anothernum.toPrecision(3));//precise value dena hai toh usme kitne digit ko focus karna padhta

const hundred=100
console.log(hundred.toLocaleString('en-In'));

//**********maths*********//

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random()*10+1);//imp for making dice game-->0-1 ke bich me value produce karta
console.log(Math.min(4,3,6,8));

//koi koi cases me we have to define min and max value

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));
console.log(min);

// formula-->Math.random()*(max-min +1) *min
