import './style.css'

let buttons = document.querySelectorAll("button");
let screen = document.getElementById("calcScreen");

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
        let input = button.textContent
        if (input !== "=" | "CE" | "()")
        screen.textContent += input
        });
    
    button.addEventListener("mouseup", () => {
        button.classList.remove('inset-shadow-sm/20')
        button.classList.add('shadow-md/20')
    })  
})