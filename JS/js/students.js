function modification(id, button) {
    const etudiants = JSON.parse(localStorage.getItem("etudiants")) || [];
    const etudiant = etudiants.find((elimant) => elimant.id === Number(id));
    const studant = button.parentElement.parentElement;

    if (button.textContent === "Modifier") {
        for (let i = 0; i < 6; i++) {
            studant.cells[i].contentEditable = true;
        }
        button.textContent = "Enregistrer";
    } else {
        etudiant.eleve = studant.cells[0].textContent;
        etudiant.niveau = studant.cells[1].textContent;
        etudiant.cours = studant.cells[2].textContent;
        etudiant.dossier = studant.cells[3].textContent;
        etudiant.telephone = studant.cells[4].textContent;
        etudiant.statut = studant.cells[5].textContent;

        localStorage.setItem("etudiants", JSON.stringify(etudiants));

        for (let i = 0; i < 6; i++) {
            studant.cells[i].contentEditable = false;
        }
        button.textContent = "Modifier";
    }
}

function supprimer(id) {
    const etudiants = JSON.parse(localStorage.getItem("etudiants")) || [];
    
    const nouveauxEtudiants = etudiants.filter(
        (etudiant) => etudiant.id !== Number(id)
    );

    localStorage.setItem("etudiants", JSON.stringify(nouveauxEtudiants));
    location.reload();
}
