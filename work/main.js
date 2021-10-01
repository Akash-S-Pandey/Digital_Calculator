let arugmenstObject = {}

let arugmentsArray = process.argv.slice(2)

// console.log(arugmentsArray)

for(let index=0; index < arugmentsArray.length; index++) {
    // split, strings --> "1,2,3,4,5"
    let splitStrings = arugmentsArray[index].split("--").join("")

    let keyValueArray = splitStrings.split("=")

    arugmenstObject[keyValueArray[0]] = keyValueArray[1]
}

function calculator(method, value1, value2){

    value1 = parseInt(value1)
    value2 = parseInt(value2)
    
    switch(method){
        case "add":
            console.log(value1 + value2)
            break

        case "subtract":
            console.log(value1 - value2)
            break

        case "multiply":
            console.log(value1 * value2)
            break

        case "divide":
            console.log(value1 / value2)
            break

        default:
            console.log("Invalid method provided.")
    }

}

calculator(arugmenstObject.method, arugmenstObject.value1, arugmenstObject.value2)