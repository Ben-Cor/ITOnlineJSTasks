import './style.css'

let buttons = document.querySelectorAll("button");
let screen = document.getElementById("calcScreen");
let currentInput = ""

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
        } else if (input == "Del") {
            currentInput = screen.textContent.slice(0, -1)
        } else if (!isNaN(input)) {
            currentInput += parseFloat(input)
        } else if (button.classList.contains("operatorButton") | input == ".") {
            currentInput += input
        } else if (input == "=") {
            function maths (problem) {
                return eval(problem)
            }
            currentInput = maths(currentInput)
        }

            

        // switch (input) {
        //     case "Clear":
        //         currentInput = ""
        //     break;
        //     case "Del":
        //         currentInput = screen.textContent.slice(0, -1)
        //     break;
        //     case !isNaN(input):
        //         currentInput += parseFloat(input)
        //     break;
        //     case "+" | "-":
        //         currentInput += input
        //     break;
        //     default:
        //         currentInput += input;
        // } 
    screen.textContent = currentInput;
    })
});