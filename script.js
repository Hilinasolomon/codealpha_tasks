const display = document.getElementById("display");
let currentInput = "";
function updateDisplay() {
        display.value = currentInput;
        
}
const display = document.getElementById("display");

let currentInput = "";

function updateDisplay() {
    display.value = currentInput;  
}
function appendValue(value) {
        currentInput += value;
            updateDisplay();
            
}
function clearDisplay() {
        currentInput = "";
            updateDisplay();
            
}
function backspace() {
        currentInput = currentInput.slice(0, -1);
            updateDisplay();
            
}
function calculate() {
        try {
                currentInput = eval(currentInput).toString();
                        updateDisplay();
                            } catch {
                                    currentInput = "Error";
                                            updateDisplay();
                                                }
                                                
}
function appendValue(value) {
        currentInput += value;
            updateDisplay();
            
}
function updateDisplay() {
        document.getElementById("display").value = currentInput;
        
}
let currentInput = "";
let currentInput = "";

// appendValue()

// updateDisplay()

// clearDisplay()

// backspace()

// calculate()

