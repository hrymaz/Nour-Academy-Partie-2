
const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value;

    if (
        emailValue === "admin@nouracademy.ma" &&
        passwordValue === "Nour123"
    ) {
        window.location.href = "admin.html";
    } 
});
