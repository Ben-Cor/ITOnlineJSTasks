// This is a function to change the title of the page on button press
function changeTitle() {
    var title = document.getElementById("title");
    if (title.textContent !== "This is a better Title!") {
        title.textContent = "This is a better Title!";
        title.classList.add("text-red-500");
    } else {
        title.textContent = "This is a Title";
        title.classList.remove("text-red-500");
    }
}

//on load, adds a alert and console log
// and appends 5 paragraphs to the messageContainer using a for loop
window.onload = function() {
    alert("Welcome to the page!");
    console.log("Page loaded");

    const container = document.getElementById("messageContainer");
    if (container) {
        for (let i = 0; i < 5; i++) {
            container.append(document.createElement("p"));
            container.lastChild.textContent = "This is message " + (i + 1);
        }
    } else {
        console.error("messageContainer element not found!");
    }
};

//array of films
let films = [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "The Phantom Menace",
    "Attack of the Clones",
    "Revenge of the Sith",
]

//on load, appends the films to the filmList

document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < films.length; i++) {
        let film = document.createElement("li");
        film.textContent = films[i];
        document.getElementById("filmList").appendChild(film);
    }
});