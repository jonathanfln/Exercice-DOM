// Exo2
// Récup mon bouton
/* let btn = document.querySelector("#exo2 button");
// Création de la fonction
let onMaCliquer = function () {
  console.log("on a cliqué");
};
// Ajouter d'un écouteur d'évenement
btn.addEventListener("click", onMaCliquer); */

// Récupérer les boutons
let navButtons = document.querySelectorAll("#buttons .select");

// Récupérer les panels
let panels = document.querySelectorAll("#panels div");

// Créer la fonction qui va changer l'état
let changePanel = function () {

  // Empêcher le comportement par défaut (recharger)
  event.preventDefault();

  // Récup le panel actif
  let panelActive = document.querySelector("#panels .active");

  // Enlever la class active du panel actif
  panelActive.classList.remove("active");

  // Récup le bouton actif
  let buttonActive = document.querySelector("#buttons .active");

  // Enlever la class active du panel actif
  buttonActive.classList.remove("active");

  // Ajouter la classe active au bouton cliqué
  event.target.classList.add("active");

  // récup la pos du bouton
  let position = event.target.getAttribute("data-pos");

  // Trouver la div correspondante
  let divCorrespondante = document.querySelector("#exo" + position);

  if (divCorrespondante) {
    // Ajoutr la classe active
    divCorrespondante.classList.add("active");
  } else {
    panelActive.classList.add("active");
  }
}
// Ajouter un écouteur d'évenement sur mes boutons
navButtons.forEach((element) => {
  element.addEventListener("click", changePanel)
});

let titreH1 = document.querySelector("h1").textContent;

let changeTitle1 = function () {

  // Remplacer le texte du titre par le contenu du bouton
  document.querySelector("h1").textContent = event.target.textContent;
};

let changeTitle2 = function () {

  // Remettre mon titre de base
  document.querySelector("h1").textContent = titreH1
};

navButtons.forEach((element) => {
  element.addEventListener("mouseover", changeTitle1)
});

navButtons.forEach((element) => {
  element.addEventListener("mouseout", changeTitle2)
});