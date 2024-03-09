const marval_heros = ["thor","Ironman", "spiderman"]
const dc = ["superman" ,"flash", "batman" ]

marval_heros.push(dc)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHero = marval_heros.concat(dc)
// console.log(allHero);

const all_new_hero = [...marval_heros, ...dc]

// console.log(all_new_hero);

const another_array = [1,2.3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Mukesh"));
console.log(Array.from("Mukesh"));