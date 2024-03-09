//  singleton
//  Object.create

//   object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Mukesh",
    "full name": "Mukesh kushwaha",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "mukeshsingh41866@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "mukehschatgpt@hnsn.com"
// Object.freeze(JsUser)
JsUser.email= "mukehs@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



