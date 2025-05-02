import './style.css'

let buttons = document.querySelectorAll("button");
let screenOutput = document.getElementById("calcScreen").textContent;

buttons.forEach(button => {
    let value = button.textContent
    button.addEventListener("click", buttonPress(value) )    
});



function buttonPress(value) {
    switch (value) {
        case (value.typeof == Number):
            screenOutput += buttonInput;
        break;
    }
}