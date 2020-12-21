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

window.addEventListener("scroll", function() {
    console.log(pageYOffset);
    if (pageYOffset >= body.offsetHeight/2 && pageYOffset <= body.offsetHeight/2 + 50) {
        showModal();
    };
});

let sendMessageBtn = document.querySelector(".send-message-btn");
console.log(sendMessageBtn);

let sendMessageModal = document.querySelector(".send-message-modal");
console.log(sendMessageModal);

sendMessageBtn.addEventListener("click", function() {
   sendMessageModal.classList.toggle("show");
});