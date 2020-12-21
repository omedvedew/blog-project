let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".close-btn");

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
};

function showModal() {
    modal.classList.remove("hide");
    modal.classList.add("show");
};

closeBtn.addEventListener("click", closeModal);

let body = document.getElementById("home-anchor");

window.addEventListener("scroll", handler);

function handler() {
    if (pageYOffset >= body.offsetHeight/2) {
    showModal();
    window.removeEventListener("scroll", handler);
};

}

let sendMessageBtn = document.querySelector(".send-message-btn");
console.log(sendMessageBtn);

let sendMessageModal = document.querySelector(".send-message-modal");
console.log(sendMessageModal);

sendMessageBtn.addEventListener("click", function() {
   sendMessageModal.classList.toggle("show");
});

// mob menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    };
});