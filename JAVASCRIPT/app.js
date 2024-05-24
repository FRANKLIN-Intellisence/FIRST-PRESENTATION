// get modal 
const modal = document.getElementById("mid");
const body = document.getElementById("body")

// get button that opens the modal
const btn = document.getElementById("mybtn");

// get span that closes modal 

const close = document.getElementsByClassName("close")[0];

// open modal when the button is clicked 
btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

// when user clicks close, close the modal 
close.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

// when the user clicks anywhere outside the modal, close it 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
