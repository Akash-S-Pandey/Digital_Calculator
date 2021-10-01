const fs = require('fs/promises');

fs.readFile(__dirname+"/quotes.txt")
.then(function(data) {
    console.log(data)
})
.catch(function(error) {
    console.log(error)
})