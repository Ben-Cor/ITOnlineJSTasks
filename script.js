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