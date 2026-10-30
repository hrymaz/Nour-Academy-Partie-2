const liste = document.querySelector("#liste-etudiants");

async function getStudents() {
    const response = await fetch("../Data/students.json");
    if (!response.ok) {
        throw new Error(`Impossible de charger les étudiants (${response.status})`);
    }

    const etudiants = await response.json();
    localStorage.setItem("etudiants", JSON.stringify(etudiants));
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
                      <button class="btn-modifier"
                          onclick="modification(${etudiant.id}, this)">
                        Modifier
                    </button>
                    <button class="btn-supprimer"
                          onclick="supprimer(this)">
                        Supprimer
                    </button>
                </td>
            </tr>
        `;
    });
}

getStudents();