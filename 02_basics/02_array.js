//const marvel_heros = ["Ma", "Mb", "Mc"]
//const dc_heros = ["dca","dcb","dc3"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
/*
const allheros =  marvel_heros.concat(dc_heros)
console.log(allheros);

const allnewheros =  [...marvel_heros, ...dc_heros]//three dots are spread, it will spreadout two array. you can use concat or spread
console.log(allnewheros);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray = anotherarray.flat(Infinity)//you should give depth, if you do not wish to give depth, you cna use infinity
console.log(realanotherarray);
*/
console.log(Array.isArray("Hiten"))
console.log(Array.from("Hiten"))
console.log(Array.from({name: "Hiten"}))//interesting, if it is not able to convert in array, it will give empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));