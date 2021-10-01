const fs = require('fs/promises')

async function readQuotes() {
    try {

        let data = fs.readFile("quotes.txt", {})
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

readQuotes()