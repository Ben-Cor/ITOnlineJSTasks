function changeTitle () {
    var title = document.getElementById("title");
    title.textContent = "This is a better Title!";
    title.classList.add("text-red-500");
}

window.onload = function() {
    alert("Welcome to the page!");
}