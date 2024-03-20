// Datatypes two types//
// primitive//
// 7 types call by valve
// String, number,boolean,null,undefined,symbol,bigInt


//Reference type 
// Array,Objects,Functions
//Javascript is Dynamic type language
const bigNumber= 23466464664n
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
//array
const heros = ["shaktiman","superman","iron man"];
// objects
let Obj={
    name:"Faizan",
    age:22,
}

//function
const myFunction = function(){
    console.log("Hello World");

}
console.log(typeof id);
const outTemp = null
console.log(typeof outTemp);

console.log(typeof myFunction);
console.log(typeof heros);