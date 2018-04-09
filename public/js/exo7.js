// Exo7
// Todo list

// Récupération de mes éléments 
// Input :
let nameTask = document.querySelector("#exo7 #nameTask");
// Bouton d'ajout
let addTask = document.querySelector("#exo7 #addTask");

// Filtres :
let filter = document.querySelectorAll("#exo7 .filter");

// Div contenant les tâches ajoutées
let taskList = document.querySelector("#exo7 #taskList");
// Ajout de mes nouvelles div
let newTask;
let task;
let buttonTask;


// Fonction ajoutant l'activité
let createTask = () => {
  // Remise à zéro du contour
  nameTask.placeholder = "New task ...";
  nameTask.classList.remove("border", "border-danger");

  // Si l'input est vide, pas de création de tâche
  if (nameTask.value == "") {
    nameTask.classList.add("border", "border-danger");
    nameTask.placeholder = "You have to name your task";
    return;
  }

  // Si il y a quelque chose dans mon input
  if (nameTask.value != "") {
    // Création de la div qui contiendra le reste
    newTask = document.createElement("div");
    newTask.classList.add("row", "justify-content-between", "align-items-center", "m-0", "border", "border-dark", "px-3", "py-1", "norm");

    // Création de la div avec le texte
    task = document.createElement("h4");
    task.classList.add("d-inline-block", "m-0", "divValid", "text");
    task.textContent = nameTask.value;

    // Création de la div avec les 3 boutons
    buttonTask = document.createElement("div");
    buttonTask.classList.add("d-inline-block");

    taskList.appendChild(newTask);
    newTask.appendChild(task);
    newTask.appendChild(buttonTask);
    buttonTask.innerHTML = "<a id='validate'><i class='far fa-check-circle'></i></a> <a id='edit' class='mx-2'><i class='fas fa-edit'></i></a> <a id='supp'><i class='far fa-times-circle'></i></a>";
    nameTask.value = "";
    // Récupérer les boutons  dans les tâches:
    var validate = newTask.querySelector("#exo7 #validate");
    var edit = newTask.querySelector("#exo7 #edit");
    var supp = newTask.querySelector("#exo7 #supp");

    validate.addEventListener("click", valiTask);
    edit.addEventListener("click", editTask);
    supp.addEventListener("click", suppTask);
  };
};


// Valide la tâche (fond vert + texte barré)
let valiTask = () => {
  let parentClosest = event.target.closest(".row");
  parentClosest.classList.toggle("bg-success");
  parentClosest.classList.toggle("barre");
  parentClosest.classList.toggle("done");
  parentClosest.classList.toggle("norm");
};

// Permet d'éditer notre tâche
let editTask = () => {
  // Récup le contenu de mon contenu
  let divContenu = event.target.closest(".row");
  let contenu = divContenu.querySelector(".text");

  // Création de mon input
  let modifInput = document.createElement("input");
  modifInput.classList.add("inputModif");

  // Création de mon bouton
  let modifButton = document.createElement("button");
  modifButton.classList.add("btn", "btn-success", "mx-3");
  modifButton.textContent = "Modifier";

  // Click du bouton
  modifButton.addEventListener("click", changeName)

  modifInput.value = contenu.textContent;
  contenu.textContent = "";

  divContenu.querySelector(".text").appendChild(modifInput);
  divContenu.querySelector(".text").appendChild(modifButton);

};

let changeName = () => {
  // Récupération du contenu de mon input
  let divContenu = event.target.closest(".row");
  let contenu = divContenu.querySelector("#taskList input");
  let h4 = divContenu.querySelector("h4");

  // Si l'input est vide, il ne modifie pas le nom
  if (divContenu.querySelector("#taskList input").value == "") {
    contenu.classList.add("border", "border-danger");
    contenu.placeholder = "You must give a name";
    return;
  };

  // Enlever la bordure rouge
  contenu.classList.remove("border", "border-danger");
  // Modifie le nom de la tâche + suppression de l'input et bouton
  h4.textContent = contenu.value;

}

// Supprime la div ou l'on clique sur la croix
let suppTask = () => {
  let parentClosest = event.target.closest(".row");
  taskList.removeChild(parentClosest);
};

// Fonction des filtres 
let allFilter = () => {
  let btnFilter = event.target.textContent;
  if (event.target.textContent == "All") {
    taskList.classList.remove("all-done");
    taskList.classList.remove("all-todo");
  } else if (event.target.textContent == "Todo") {
    taskList.classList.remove("all-done");
    taskList.classList.add("all-todo");
  } else if (event.target.textContent == "Done") {
    taskList.classList.add("all-done");
    taskList.classList.remove("all-todo");
  };
};

// Click du bouton add task
addTask.addEventListener("click", createTask);

// Clic des filtres
filter.forEach(element => {
  element.addEventListener("click", allFilter);
});