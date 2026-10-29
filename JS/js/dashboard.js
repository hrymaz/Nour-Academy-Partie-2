
const form = document.querySelector("#form-inscription");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        !/^[A-Za-zÀ-ÿ\s'-]{2,50}$/.test(document.querySelector("#nom").value.trim()) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.querySelector("#email").value.trim()) ||
        !/^(?:\+212|0)(?:[ \-]?\d){9}$/.test(document.querySelector("#tel").value.trim()) ||
        !/^[A-Za-zÀ-ÿ\s'-]{2,60}$/.test(document.querySelector("#prenom").value.trim()) ||
        document.querySelector("#mdp").value.length < 8 ||
        document.querySelector("#mdp2").value !== document.querySelector("#mdp").value ||
        !document.querySelector("#consentement").checked
    ) {
        document.querySelector("#form-msg").textContent =
            "Veuillez vérifier les champs du formulaire.";

    window.location.href = "admin.html";
   
    }  else {
    window.location.href = "login.html";
   }
});

