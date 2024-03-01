//  Primitive

//   7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('12345')

console.log(id === anotherId);

const bigNumber = 23474774474n


//  Reference (Non Primitive)

//  Array, Objects, Functions


const heros = ["shaktiman", "naagraj","doga" ]
let myObj = {
  name: "Mukesh",
  age: 22,

}

const myFunction = function(){
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), heap (Non Primitive)

let myYoutubename = "mukeshKushwahacom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mukesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);