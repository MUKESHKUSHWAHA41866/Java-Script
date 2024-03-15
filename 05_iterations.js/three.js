//  for of loop


//  ["","" ,""]
// [{}, {} , {}]


// const arr = [1,2, 3,34, 5]
//   for (const  num of arr) {
//     console.log(num);
    
//   }


  const greetings = "Hello world"
  for (const greet of greetings) {
    //   console.log(`Each char is ${greet}`);
    
  }

//   Maps

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('SR', "SRILANKA")

// console.log(map);

// map is unique value

for (const  [key,value] of map) {
    // console.log(key,':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}

// for (const [key, value] of myObject) {
//     console.log(key,':-', value);
    
// }