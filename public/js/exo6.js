// Exo6
// Niveau1
// Récupération de mes éléménts
let input1 = document.querySelector("#exo6 .nb1");
let input2 = document.querySelector("#exo6 .nb2");
let butResult = document.querySelector("#exo6 .calc1");
let result1 = document.querySelector("#exo6 .result1");

// Fonction Addition
let additionNiv1 = function (event) {
  let nb1 = parseInt(input1.value);
  let nb2 = parseInt(input2.value);
  let resultat = nb1 + nb2;
  result1.textContent = resultat;
};

// Ajouter un eventListener
butResult.addEventListener("click", additionNiv1);

// Niveau2
// Récupération des chiffres
let btnCalc = document.querySelectorAll("#niv2 .chiffre");
// Récupération des opérations
let btnOperation = document.querySelectorAll("#niv2 .btnOperation");
// Récupération du bouton égal
let egal = document.querySelector("#niv2 #btnEgal");
// Récupération de mon afficheur
let spanAffiche = document.querySelector("#niv2 .spanAffiche");
// Récupération de l'input
let input = document.querySelector("#niv2 .spanEcrit");
// Déclarer le nombre
let nombre;
// Déclarer l'opérateur
let operateur;

// Créer les fonctions
// Ajouter un nombre dans l'input
let addNumber = function (event) {
  // Prendre le nombre du bouton
  let chiffre = event.target.textContent;
  // Ajouter le chiffre dans l'input
  input.value += chiffre;
};

// Choisir un oéprateur
let chooseOperator = function (event) {
  // Récupérer la valeur de l'input
  nombre = input.value;
  // On récupère l'opérateur
  operateur = event.target.textContent;
  // On place le nombre et l'opérateur dans le résultat
  spanAffiche.textContent = nombre + operateur;
  // Vider l'input
  input.value = "";
};

// Faire le calcul
let calculate = function (event) {
  // Récupérer les deux nombre à calculer
  let num1 = parseFloat(nombre);
  let num2 = parseFloat(input.value);
  let numResult;

  switch (operateur) {
    case "+":
      numResult = num1 + num2;
      break;
    case "-":
      numResult = num1 - num2;
      break;
    case "*":
      numResult = num1 * num2;
      break;
    case "/":
      numResult = num1 / num2;
      break;
    default:
      console.log("error");
  }
  spanAffiche.textContent = numResult;
  input.value = "";
};


// Ajouter le clic au chiffres
btnCalc.forEach((element) => {
  element.addEventListener("click", addNumber)
});
// Choisir un opérateur 
btnOperation.forEach((element) => {
  element.addEventListener("click", chooseOperator)
});
// Ajouter un eventListener addition
egal.addEventListener("click", calculate);