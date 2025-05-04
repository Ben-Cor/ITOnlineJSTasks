
const submit = document.getElementById("submit");
let url = document.getElementById("imgURL").value;


function addImage() {
    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    } else {
        const gallery = document.getElementById("gallery");
        const image = document.createElement("img");
        image.classList.add("gallery-image");
        image.setAttribute("src", url);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.setAttribute("onclick", () => {
            gallery.removeChild(image);
        });
        image.appendChild(removeButton);
        gallery.appendChild(image);
    }
}

submit.addEventListener("submit", addImage())