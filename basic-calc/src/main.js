import './style.css'

let buttons = document.querySelectorAll("button");
let screenOutput = document.getElementById("calcScreen").textContent;

buttons.forEach(button => {
    // let value = button.textContent
    // button.addEventListener("click", buttonPress(value))
    button.addEventListener("mousedown", (button) => {
        if (button.className = "p-4 bg-slate-200 m-1 shadow-lg rounded-md")
        button.className.toggle("p-4 bg-slate-200 m-1 inset-shadow-sm rounded-md")
    })    
});



// function buttonPress(value) {
//     switch (value) {
//         case (value.typeof == Number):
//             screenOutput += value;
//         break;
//         case (value == "+"):
//             screenOutput += "+"
//     }
// }


buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.classList.remove('shadow-lg/20')
        button.classList.add('inset-shadow-sm/20')
        });
    
    button.addEventListener("mouseup", () => {
        button.classList.remove('inset-shadow-sm/20')
        button.classList.add('shadow-lg/20')
    })  
})