import './style.css'

let buttons = document.querySelectorAll("button");
let screenOutput = document.getElementById("calcScreen").textContent;

buttons.forEach(button => {
    button.addEventListener("click", buttonPress )    
});

// function buttonPress(screenOutput) {
//     let buttonInput = button.textContent.value
//     switch (buttonInput) {
//         case (buttonInput.typeof == Number):
//             screenOutput += buttonInput;
//         break;
//     }
// }