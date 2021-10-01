const fs = require('fs/promises');

async function readFile(){
    let data = await fs.readFile(__dirname+"/quotes.txt");
    console.log(data.toString());
}

readFile()