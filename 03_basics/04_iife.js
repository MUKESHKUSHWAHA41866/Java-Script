//   Immediately Invoked Function Expressions (IIFE)

(function chai() {

    //  name IIFE
    console.log(`DB CONNECTED`);
})();

// chai()

((name) => {

    //  simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('mukesh')

