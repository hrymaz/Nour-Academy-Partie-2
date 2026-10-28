const liste = document.querySelector("#liste-etudiants");

async function getStudents() {
    const response = await fetch("../../students.json");
    const etudiants = await response.json();

    afficherEtudiants(etudiants);
}

function afficherEtudiants(etudiants) {
    liste.innerHTML = "";

    etudiants.forEach((etudiant) => {
        liste.innerHTML += `
            <tr>
                <td>${etudiant.eleve}</td>
                <td>${etudiant.niveau}</td>
                <td>${etudiant.cours}</td>
                <td>${etudiant.dossier}</td>
                <td>${etudiant.telephone}</td>
                <td>${etudiant.statut}</td>
                <td><span class="status actif">Actif</span></td>
                <td class="actions">
                    <button class="btn-modifier">Modifier</button>
                    <button class="btn-supprimer">Supprimer</button>
                </td>
            </tr>
        `;
    });
}

getStudents();