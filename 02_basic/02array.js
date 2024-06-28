const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]
///////adding two array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);
//for merging array -->element me
const all_heros=[...marvel_heros,...dc_heros]
 console.log(all_heros);

 //array ke ander array ke ander array ko normal array karne ke liyr

const another_array=[1,2,3,[4,5],[6,7,[8,9]]]
console.log(another_array.flat(Infinity));


console.log(Array.isArray("soha"));
console.log(Array.from("soha"));
console.log(Array.from({name:"soha"}));//interesting

//converting various variable into an array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));