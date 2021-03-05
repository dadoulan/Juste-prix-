// Etape 1 : Selectionner les variables
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// Etape 2 : Cacher l'erreur
error.style.display = "none";

// Etape 3 : Generer nombre aléatoire
let coups = 0;
let nombreChoisi;
let nombreAleatoire = genererNombre(1001);
console.log(nombreAleatoire);

function genererNombre(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Etape 6 : Créer la fonction vérifier

function verifier(nombre) {
  let instruction = document.createElement("div");
  // instruction.prepend(instruction);

  if (nombre > nombreAleatoire) {
    instruction.className = "instruction moins";
    instruction.textContent =
      "#" + coups + " : ( " + nombre + " ) " + " C'est moins !";
  } else if (nombre < nombreAleatoire) {
    instruction.className = "instruction plus";
    instruction.textContent =
      "#" + coups + " : ( " + nombre + " ) " + " C'est plus !";
  } else {
    instruction.className = "instruction fini";
    instruction.textContent =
      "#" +
      coups +
      " : ( " +
      nombre +
      " ) " +
      " Félicitations, vous avez trouvé le juste prix !";

    input.disabled = true;
  }

  // Ajout de la div;
  document.querySelector(".instructions").prepend(instruction);
}

// Etape 4 : Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    nombreChoisi = input.value;
  }
});

// Etape 5 : Agir à l'envoie du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});
