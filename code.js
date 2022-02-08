// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if (input === undefined){
        return "Hello, World!"
    }else if(typeof input === "boolean"){
        return "Hello, World!"
    } else{
    return "Hello, " + input + "!";}
}

function isFive(input){
return input == 5;
};

function isEven(input){
return input % 2 == 0
}

function isVowel(input) {
    if (input == "a") {
        return true
    } else if (input == "A") {
        return true
    } else {
        return false
    }
}

function toAdd(num1, num2){
    return Number(num1) + Number(num2);
}
