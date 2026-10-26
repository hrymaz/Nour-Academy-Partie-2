const courses = [
  {
    id: 1,
    titre: "Maths",
    niveau: "Collège",
    creneau: "Lundi 17h-19h",
    prix: 350,
    places: 8,
  },
  {
    id: 2,
    titre: "Physique",
    niveau: "2e Bac",
    creneau: "Mercredi 17h-19h",
    prix: 450,
    places: 0,
  },
  {
    id: 3,
    titre: "Chimie",
    niveau: "Lycée",
    creneau: "Jeudi 16h-18h",
    prix: 400,
    places: 6,
  },
  {
    id: 4,
    titre: "Français",
    niveau: "Primaire",
    creneau: "Samedi 10h-12h",
    prix: 250,
    places: 10,
  },
  {
    id: 5,
    titre: "Anglais",
    niveau: "Lycée",
    creneau: "Lundi 18h-19h30",
    prix: 300,
    places: 12,
  },
  {
    id: 6,
    titre: "SVT",
    niveau: "2e Bac",
    creneau: "Vendredi 17h-19h",
    prix: 400,
    places: 0,
  },
  {
    id: 7,
    titre: "Arabe",
    niveau: "Primaire",
    creneau: "Dimanche 10h-12h",
    prix: 250,
    places: 11,
  },
  {
    id: 8,
    titre: "Informatique",
    niveau: "Collège",
    creneau: "Mardi 16h-17h30",
    prix: 350,
    places: 3,
  },
  {
    id: 9,
    titre: "Maths",
    niveau: "Lycée",
    creneau: "Samedi 16h-17h30",
    prix: 300,
    places: 9,
  },
  {
    id: 10,
    titre: "Physique",
    niveau: "Collège",
    creneau: "Lundi 19h-21h",
    prix: 300,
    places: 5,
  },
  {
    id: 11,
    titre: "SVT",
    niveau: "Collège",
    creneau: "Mardi 15h-17h30",
    prix: 250,
    places: 11,
  },
  {
    id: 12,
    titre: "Français",
    niveau: "Lycée",
    creneau: "Dimanche 8h-11h30",
    prix: 200,
    places: 9,
  },
];

const selection = [];

const liste = document.querySelector("#liste-cours");
const compteur = document.querySelector("#compteur");
const filtreNiveau = document.querySelector("#filtre-niveau");
const filtreMatiere = document.querySelector("#filtre-matiere");
const aucunResultat = document.querySelector("#aucun-resultat");
const listeSelection = document.querySelector("#liste-selection");
const selectionVide = document.querySelector("#selection-vide");
const totalAffiche = document.querySelector("#total");

function renderCourses(list) {
  liste.innerHTML = "";

  list.forEach((c) => {
    const complet = c.places === 0;
    const ajoute = selection.includes(c.id);

    let texteBouton = "Ajouter";
    if (complet) texteBouton = "Complet";
    else if (ajoute) texteBouton = "Ajouté ✓";

    liste.innerHTML += `
      <article class="carte">
        <h3>${c.titre}</h3>
        <p>${c.niveau}</p>
        <p>${c.creneau}</p>
        <p>${c.prix} MAD / mois</p>
        <p>${complet ? "Complet" : c.places + " places restantes"}</p>
        <button data-id="${c.id}" ${complet || ajoute ? "disabled" : ""}>
          ${texteBouton}
        </button>
      </article>`;
  });

  compteur.textContent = `${list.length} cours disponibles`;
  aucunResultat.hidden = list.length !== 0;
}

function appliquerFiltres() {
  const niveau = filtreNiveau.value;
  const matiere = filtreMatiere.value;

  const resultat = courses.filter((c) => {
    const okNiveau = niveau === "" || c.niveau === niveau;
    const okMatiere = matiere === "" || c.titre === matiere;
    return okNiveau && okMatiere;
  });

  renderCourses(resultat);
}

function renderSelection() {
  listeSelection.innerHTML = "";
  let total = 0;

  selection.forEach((id) => {
    const c = courses.find((cours) => cours.id === id);
    total += c.prix;

    listeSelection.innerHTML += `
      <li>
        <span>${c.titre} — ${c.niveau} (${c.prix} MAD / mois)</span>
        <button data-id="${c.id}">Retirer</button>
      </li>`;
  });

  selectionVide.hidden = selection.length !== 0;
  totalAffiche.textContent = `${total} MAD`;
}

liste.addEventListener("click", (event) => {
  const bouton = event.target.closest("button");
  if (!bouton || bouton.disabled) return;

  const id = Number(bouton.dataset.id);
  if (selection.includes(id)) return;

  selection.push(id);
  renderSelection();
  appliquerFiltres();
});

listeSelection.addEventListener("click", (event) => {
  const bouton = event.target.closest("button");
  if (!bouton) return;

  const id = Number(bouton.dataset.id);
  const index = selection.indexOf(id);
  if (index === -1) return;

  selection.splice(index, 1);
  renderSelection();
  appliquerFiltres();
});

filtreNiveau.addEventListener("change", appliquerFiltres);
filtreMatiere.addEventListener("change", appliquerFiltres);

renderCourses(courses);
renderSelection();