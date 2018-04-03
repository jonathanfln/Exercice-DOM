// Exo4
// Récupération de mon bouton
let boutondeplacement = document.querySelector("#exo4 button");

// Récupération des div parents et enfants
let parent1 = document.querySelector("#exo4 #parent1");

let parent2 = document.querySelector("#exo4 #parent2");

let enfant = document.querySelector("#exo4 #enfant");

let nbClic = 0;

// Fonction de déplacement
let deplacement = function () {
  event.preventDefault();
  if (parent1.children.length != 0) {

    // Mettre le le contenu de ma col dans l'autre
    parent2.appendChild(enfant);
  } else {
    parent1.appendChild(enfant);
  };

  nbClic++;
  document.querySelector("#exo4 #comptage").textContent = "Tu as cliqué " + nbClic + " fois !";
};

boutondeplacement.addEventListener("click", deplacement);