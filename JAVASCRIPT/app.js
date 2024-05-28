// get modal elements
const modal = document.getElementById("mid");
const body = document.getElementById("body");

const btn = document.getElementById("mybtn");
const close = document.getElementsByClassName("close")[0];

//Implement Modal Elements
btn.addEventListener("click", openModal);
function openModal() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

close.addEventListener("click", closeModal)
function closeModal() {
    modal.style.display = "none";
    search.style.display = "none";
    body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}

//List elements
const ListEl = document.getElementById("list-2");
const hamburgerEl = document.querySelector(".hamburger");
const CloseListEl = document.querySelector(".list-close"); 

hamburgerEl.addEventListener("click", openList);
function openList() {
    ListEl.style.display = "flex";
}

CloseListEl.addEventListener("click", closeList);
function closeList() {
    ListEl.style.display = "none";
}


// get Mobile-search elements 
const sead = document.getElementById("sead");
const search = document.getElementById("mobile-search");
const clean = document.getElementsByClassName("mobile-button")[0];

//Implementing Mobile-serach button
sead.addEventListener("click", OpenSead);
function OpenSead() {
    search.style.display = "flex";
}

clean.addEventListener("click", CloseSearch);
function CloseSearch(event) {
    if (event.target == clean) {
        search.style.display = "none";
    }
}
