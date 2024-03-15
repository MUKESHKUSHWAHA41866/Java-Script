function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
// let result = num1 + num2 
// console.log("mukesh");
// return result

return num1 +num2

}


const result = addTwoNumbers(4,5)
// console.log("Result:" , result);


function loginUserMessage(username){
    if(username === undefined){
    console.log("please enter a username");
    return

    }
     return `${username} just logged in`
}

// console.log(loginUserMessage("mukesh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 988, 766,7855));

const user = {
    username: "Mukesh",
    Price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.Price}`);

}
// handleObject(user);
handleObject({
    username: "kushwaha",
    Price: 499
});

const myNewArray = [200,400, 100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400,500, 6000]));
