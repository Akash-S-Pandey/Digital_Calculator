const fs = require('fs');

function getQuotes() {
    fs.readFile(__dirname + "/quotes.txt", {}, function (err, data ){
        if(err) {
            console.log(err)
        }

        let dataArray = data.toString().split("\n")

        let index = Math.random() * dataArray.length

        index = parseInt(index)

        console.log("\n")
        console.log(dataArray[index])
        console.log("\n")

    })
}

getQuotes()