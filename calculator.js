let a = null;// first number
let b = null; // second number
let op = null; //operator function + - / *

function add (a,b){
    return a+b;
}

function subract(a,b){
return a-b;
}

function divide(a,b) {
    if(b===0){  
        return "Error: Division by zero";
    }
    return a/b;
}

function multiply(a,b){
    return a*b;
}

function operate(op,a,b){
    if (op==='+'){
        add(a,b);
    } else if(op==='-'){
        subract(a,b);
    } else if(op==='*'){
        multiply(a,b);
    } else if(op==='/') {
        divide(a,b);
    } else {
        return "Error:Invalid Operator";
    }
   
}