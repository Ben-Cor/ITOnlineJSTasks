import './style.css'

let buttons = document.querySelectorAll("button");
let screen = document.getElementById("calcScreen");
let currentInput = "";
let evaluated = false;

// Styling for button press
buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.classList.remove('shadow-md/20')
        button.classList.add('inset-shadow-sm/20')
        });
    
    button.addEventListener("mouseup", () => {
        button.classList.remove('inset-shadow-sm/20')
        button.classList.add('shadow-md/20')
    })  
})


//Add to screen and currentInput
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let input = button.textContent
        if (input === "Clear") {
            currentInput = "";
            evaluated = false
        } else if (input == "Del") {
            currentInput = screen.textContent.slice(0, -1)
            evaluated = false
        } else if (!isNaN(input)) {
            if (evaluated) {
                currentInput = input
                evaluated = false;
            } else {
                currentInput += parseFloat(input)
            }
        } else if (button.classList.contains("operatorButton") | input == ".") {
            currentInput += input
            evaluated = false
        } else if (input == "=") {
            function maths (problem) {
                return eval(problem)
            }
            currentInput = maths(currentInput)
            evaluated = true;
        } else if (input == "x2") {
            currentInput = currentInput * currentInput;
            evaluated = false
        }

    screen.textContent = currentInput;
    })
});