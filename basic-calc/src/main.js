import './style.css'

let buttons = document.querySelectorAll("button");
let screen = document.getElementById("calcScreen");
let currentInput = ""

// function buttonPress(value) {
//     switch (value) {
//         case (value.typeof == Number):
//             screenOutput += value;
//         break;
//         case (value == "+"):
//             screenOutput += "+"
//     }
// }


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


//Add to screen
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let input = button.textContent
        if (input == "Clear") {
            currentInput == ""
        } else if (input == "Del") {
            currentInput = screen.textContent.slice(0, -1)
        } else if (!isNaN(input)) {
            currentInput += parseFloat(input)
        } else if (button.classList.contains("operatorButton")) {
            currentInput += input
        }
            

    //     switch (input) {
    //         case (input == "CE"):
    //             screen.textContent == ""
    //         break;
    //         case (input == "Del") :
    //             screen.textContent = screen.textContent.slice(0, -1)
    //         break;
    //         case (!isNaN(input)):
    //             screen.textContent += input
    //         break;
    //     } 
    screen.textContent = currentInput;
    })
});