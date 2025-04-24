function changeTitle () {
    var title = document.getElementById("title");
    if (title.textContent !== "This is a better Title!") {
        title.textContent = "This is a better Title!";
        title.classList.add("text-red-500");
    } else {
        title.textContent = "This is a Title";
        title.classList.remove("text-red-500");
    }
}

window.onload = function() {
    alert("Welcome to the page!");
}

window. onload = function() {
    console.log("Page loaded");
}