const fs = require('fs');

console.log("first one")

// async logic
// fs.readFile(__dirname + "/quotes.txt", function (err, data) {
//     if(err) {
//         console.log(err+'');
//     }

//     console.log("second one")

// })

// sync logic
// let data = fs.readFileSync(__dirname+"/quotes.txt");

// console.log("second one")

console.log("third one")

console.log(data.toString())