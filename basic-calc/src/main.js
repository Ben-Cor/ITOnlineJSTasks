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


//Add to screen and currentInput updates
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let input = button.textContent
        switch (input) {
            case ("Clear"):
                currentInput = "";
                evaluated = false
            break;
            case ("Del"):
                currentInput = screen.textContent.slice(0, -1)
                evaluated = false
            break;
            case ("="):
                currentInput = eval(currentInput)
                evaluated = true;
            break;
            case ("x2"):
                currentInput = currentInput * currentInput;
                evaluated = false
            break;
            case ("( )"):
                let openBrackets = currentInput.split("(").length -1;
                let closedBrackets = currentInput.split(")").length -1;
                if (openBrackets > closedBrackets) {
                    currentInput += ")"
                } else {
                    currentInput += "("
                }
            break
            default:
                if (evaluated && !isNaN(input)) {
                    currentInput = input
                    evaluated = false;
                } else {
                    currentInput += input
                    evaluated = false
                }
        }

    screen.textContent = currentInput;
    })
});