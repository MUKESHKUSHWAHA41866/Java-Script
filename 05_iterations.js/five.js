const coding = ["js","ruby", "java", "python","cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach ( (item,index,arr ) => {
    // console.log(item , index, arr);
})

const myCoding = [
    {
    languageName: "Javascript",
    languageFileName:"Js"
    },
    {
    languageName: "Java",
    languageFileName:"Java"
    },
    {
    languageName: "Python",
    languageFileName:"Python"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})

