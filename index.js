const add=require("./add")
const subtract=require("./subtract")
const multiply=require("./multiply")
const division=require("./division")
const slice=process.argv.slice(2);
console.log(slice.slice(2))
switch(slice[1]){
    case '+':
        console.log(add.add(slice[0],slice[2]))
        break;
    case "-":
        console.log(subtract.subtract(slice[0],slice[2]))
        break;
    case "*":
        console.log(multiply.multiply(slice[0],slice[2]))
        break;
    case "/":
        console.log(division.division(slice[0],slice[2]))
        break;
    default:
        console.log("Invalid");    
}