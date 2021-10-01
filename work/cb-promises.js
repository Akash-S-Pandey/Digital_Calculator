const fs = require("fs");

function readFile(path, options) {
    return new Promise((resolve , reject) => {
        fs.readFile(path, options, function(error, data) {
            if(error) {
                reject(error)
            }
            resolve(data)
        })
    })
}

readFile("quotes.txt", {})
.then(data => {
    console.log(data.toString())
})
.catch(error => {
    console.log(error)
})