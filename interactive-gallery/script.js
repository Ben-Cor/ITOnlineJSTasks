const form = document.getElementById("inputs"); // Match the updated id in the HTML

function addImage(event) {
    event.preventDefault();

    const url = document.getElementById("imgURL").value; // Get the value dynamically
    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    } else {
        const div = document.createElement("div");
        div.classList.add("gallery-item");
        div.setAttribute("id", "gallery-item");
        const gallery = document.getElementById("gallery");
        const image = document.createElement("img");
        image.classList.add("gallery-image");
        image.setAttribute("src", url);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            gallery.removeChild(div);
        });
        div.appendChild(image);
        div.appendChild(removeButton);
        gallery.appendChild(div);
    }
}

form.addEventListener("submit", addImage);