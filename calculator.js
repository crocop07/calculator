const display = document.getElementById('display');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const numberButtons = document.querySelectorAll('.numbers button');
const operationButtons = document.querySelectorAll('.operations button');
console.log(numberButtons);


let a = null;// first number
let b = null; // second number
let op = null; //operator function + - / *
let isNewNumber = false; 
let showingResult = false;

numberButtons.forEach(btn => {
    btn.addEventListener('click', () =>{
        if (showingResult) {
            // Reset display but keep 'a' for chaining
            a = null; // Full reset when starting new number after result
            op = null;
            display.textContent = '';
            showingResult = false;
            isNewNumber = false;
        }

        if (isNewNumber) {
            display.textContent = 0; // Reset the display for a new number
            isNewNumber = false; // Reset the flag
        }
        
        if(display.textContent==='0' && btn.textContent !== '.'){
            display.textContent=btn.textContent; //replace zero with sekected number
        } else {
            updateDis(btn.textContent);
        }

    })
});

operationButtons.forEach(btn=>{
    btn.addEventListener('click', () =>{
        showingResult = false;
        const currentOp = btn.textContent;
     if (a === null && display.textContent === '0') {
            a = 0; // Treat as starting with zero
            op = currentOp;
            isNewNumber = true;
            return;
        }


     if (a !== null && op !== null && !isNewNumber){ //If all elements are in place 1st num 2nd num and operator
        b=parseFloat(display.textContent); //store the displays number as a
        const result = operate (op,a,b);
        display.textContent = result;
        a = result;
     }   else if (a===null){ //if there is no 1st number entered number is a
        a=parseFloat(display.textContent);
     }
     op=currentOp;
     isNewNumber=true;
    })
});

equals.addEventListener('click', ()=>{
    console.log('State at equals:', {a, op, isNewNumber, display: display.textContent});
    if (a!==null && op!==null && !isNewNumber){
        b=parseFloat(display.textContent);
        const result = operate(op,a,b);
        display.textContent=result;
        a = result; // Store the result in `a` for the next calculation
        showingResult = true;
        op = null;
        isNewNumber = true;
    }

    else if(a !== null && op !== null && isNewNumber) {
        // Repeat first number as second number (e.g., "5 + 5")
        const result = operate(op, a, a);
        display.textContent = result;
        a = result;
        op = null;
        isNewNumber = true;
    } else if (a !== null && op === null) {
        isNewNumber = true;

     } else {
            display.textContent = '0';
            a = null;
            op = null;
            isNewNumber = false;
        }
});

clear.addEventListener('click', ()=>{
    a=null;
    b=null;
    op=null;
    isNewNumber = false;
    showingResult = false;
    console.log(a,b,op);
    clearDisplay();
});

function add (a,b){
    return a+b;
}

function subtract(a,b){
return a-b;
}

function divide(a,b) {
    if(b===0){  
        console.log("error:cant divide by zero");
        return "Error: Division by zero";
        
    } else {
    return a/b;
    }
}

function multiply(a,b){
    return a*b;
}

function operate(op,a,b){
    if (op==='+'){
        return add(a,b);
    } else if(op==='-'){
        return subtract(a,b);
    } else if(op==='*'){
       return multiply(a,b);
    } else if(op==='/'){
       return divide(a,b);
    }
     else {
        console.log(`a is: ${a} b is: ${b} op is: ${op}`);
        return "Error:Invalid Operator";
        
    }
   
}


function clearDisplay(){
    display.textContent = '0';
}

function updateDis(val){
    display.textContent += val;
};

//document.getElementById("equals").addEventListener("click", operate);

document.getElementById("clear").addEventListener("click", clear);