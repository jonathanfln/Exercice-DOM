// Exo5
// Récupération du bouton
let ajoutEgg = document.querySelector("#exo5 #add-egg");

let panier = document.querySelector("#exo5 #panier");

let nbEgg = 0;

let ajouterEgg = function () {
  // Création de l'élément "img"
  let newEgg = document.createElement("img");

  // Ajout attributs
  newEgg.setAttribute("src", "../img/fuck.jpg");
  newEgg.setAttribute("width", "100px");

  // Mettre le nouvel oeuf dans le panier
  panier.appendChild(newEgg);

  nbEgg++;
  if (nbEgg == 1) {
    document.querySelector("#exo5 #nbEgg").textContent = "Tu as " + nbEgg + " problème";
  } else {
    document.querySelector("#exo5 #nbEgg").textContent = "Tu as " + nbEgg + " problèmes";
  }
}

ajoutEgg.addEventListener("click", ajouterEgg);