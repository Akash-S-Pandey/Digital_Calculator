let arguments = {};
const argumentsArray = process.argv.slice(2);

// loop through array of arguments
for(let index = 0; index < argumentsArray.length; index++) {
    let splitArray = argumentsArray[index].split("--");
    let joinedString = splitArray.join("");
    let keyValueArray = joinedString.split("=");
    arguments[keyValueArray[0]] = keyValueArray[1];
}

function calculator(method, value1, value2) {
    value1 = parseInt(value1)
    value2 = parseInt(value2)

    switch (method) {
        case 'add' :
            console.log(value1 + value2);
            break;

        case 'subtract' :
            console.log(value1 - value2);
            break;

        case 'multiply' :
            console.log(value1 * value2);
            break;

        case 'divide' :
            console.log(value1 / value2);
            break;

        default:
            console.log("Invalid method selected!!!")
    }
}

calculator(arguments.method, arguments.value1, arguments.value2);