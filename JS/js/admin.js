
const liste = document.querySelector("#liste-etudiants");

let etudiants = [];

async function getStudents() {
    try {
        const response = await fetch("../Data/students.json");

        if (!response.ok) {
            throw new Error("Fichier students.json introuvable");
        }

        etudiants = await response.json();

        afficherEtudiants();
    } catch (erreur) {
        console.error(erreur);
        liste.innerHTML = `
            <tr>
                <td colspan="8">Erreur de chargement des étudiants</td>
            </tr>
        `;
    }
}

function afficherEtudiants() {
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
                <td>${etudiant.date}</td>
                <td class="actions">
                    <button class="btn-modifier"
                        onclick="modifierEtudiant(${etudiant.id})">
                        Modifier
                    </button>
                    <button class="btn-supprimer"
                        onclick="supprimerEtudiant(${etudiant.id})">
                        Supprimer
                    </button>
                </td>
            </tr>
        `;
    });
}

getStudents();
