function add(a,b){
    return a+b;
}
console.log(add(5,7));
 

function sub(a,b){
    return a-b;
}
console.log(sub(10,5));


function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5));


function divide(a,b){
    return a/b;
}
console.log(divide(10,5));

// function output(add,sub,multiply,divide){
//     console.log(add);
//     console.log(sub);
//     console.log(multiply);
//     console.log(divide);
// }
// output(add(5,7),sub(10,5),multiply(4,5),divide(10,5)

function result(a,b){
    return {"add is ":add(a,b) , "sub is ":sub(a,b) , "multiply is ":multiply(a,b), "divide is ":divide(a,b)};
}
console.log(result(10,5)); 