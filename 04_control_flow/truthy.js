const userEmail = ""

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values

//   false, 0,-0, BigInt 0n, "" , null, undefined, NaN

// Truthy Values

// "0" , 'false' , " ", [] , {}, function(){}

//  if ( userEmail.length === 0) {
//     console.log("Array is empty");
//  }

 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
 }

//  Nullish Coalescing Operator (??): null underfind

let vall;
// vall = 5 ?? 10
// vall = null ?? 10
// vall = undefined ?? 17

vall = null ?? 10 ?? 30



console.log(vall);


//  Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");