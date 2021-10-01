const fs = require("fs/promises")

console.log("first one")

fs.readFile("quotes.txt", {})
.then(function(data) {
    return data.toString()
})
.then(function(result) {
    console.log(result.toUpperCase())
})
.catch(function(error) {
    console.log(error)
})
.finally(() => {
    console.log("fourth one")
    console.log("Hey I am triggered anyway!")
})

console.log("third one")