const gallery = document.getElementById("gallery");
const submit = document.getElementById("submit");
let url = document.getElementById("imgURL").value;


function addImage() {
    let image = document.createElement("img")
    image.setAttribute("src", url);
    gallery.appendChild(image);
}

submit.addEventListener("submit", addImage())