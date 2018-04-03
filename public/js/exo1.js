// Exo1
// Recup mon titre
var titre2 = document.querySelector("#exo1 h2");
// Changer le titre
titre2.textContent = "Le titre modifié";
// Changer la coulur du titre
titre2.style.color = "blue";
// Rajouter des classes
titre2.classList.add("bg-danger", "text-center");
// Recherche de l'attribut data-infor
var attribut = titre2.attributes[1].nodeValue;
// ou
var attribut = titre2.getAttribute("data-infor");