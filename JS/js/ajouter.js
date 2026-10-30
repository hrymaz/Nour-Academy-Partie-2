const modal = document.querySelector("#modal");
const form = document.querySelector("#form-ajout");

document.querySelector("#btn-ajouter").onclick = () => {
  form.reset();
  modal.showModal();
};

document.querySelector("#btn-annuler").onclick = () => modal.close();

form.onsubmit = (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  const etudiants = JSON.parse(localStorage.getItem("etudiants")) || [];
  const id = etudiants.length ? Math.max(...etudiants.map((s) => s.id)) + 1 : 1;

  data.id = id;
  data.dossier = "NA-2026-" + String(id).padStart(3, "0");

  etudiants.push(data);
  localStorage.setItem("etudiants", JSON.stringify(etudiants));

  afficherEtudiants(etudiants);
  modal.close();
};