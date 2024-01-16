const display = document.getElementById('display');

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        display.value = "can't divide 0 with 0";
        setTimeout(() => {
            display.value = '';
        }, 1300);
    }
    else {
        display.value = calculatedValue;
    }
}

/*display entered value on screen */
function thefunction(enteredValue) {
    if (!display.value) {
        display.value = '';
    }

    display.value += enteredValue;

}
// to clear all the result on the screen
function clearDisplay() {
    display.value = '';
}
//clear the last one
function removeLast() {
    display.value = display.value.slice(0, -1);
}
/*adding event handler on the document to handle keyboard inputs */
document.addEventListener("keydown", keyboardInputHandler);

/*function to handle keyboard input */

function keyboardInputHandler(e) {
    //     to fix the default behavior of browser,
    //    enter and backspace were causing undesired behavior when some key was already in focus
    e.preventDefault();
    // numbers
    if (e.key >= '0' && e.key <= '9') {
        display.value += e.key;
    }
    //operators
    if (e.key === "+") {
        display.value += '+';
    }
    if (e.key === "-") {
        display.value += '-';
    }
    if (e.key === "*") {
        display.value += '*';
    }
    if (e.key === "/") {
        display.value += '/';
    }
    //decimal
    if (e.key === ".") {
        display.value += '.';
    }

    // press enter to see result
    if (e.key === "Enter") {
        calculate(display.value)
    }
    //backspace for removing the last input
    if (e.key === "Backspace") {
        removeLast();
    }

}
