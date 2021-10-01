const fs = require("fs");

console.log("first one")

setTimeout(() => {
    fs.readFileSync("quotes.txt", {})
    console.log("second one")
},2000)

console.log("third one")