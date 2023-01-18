let content = document.querySelector('#content')
let createH2 = document.createElement('h2')
createH2.innerText = "oui j'aime le paté arretez de me juger"

content.appendChild(createH2)

let plorem = document.createElement('p')
plorem.innerText = "lorem ipsum fachos tacos del muerte nueve"
content.appendChild(plorem)

const h1 = document.createElement("h1");
h1.innerText = "Le DOM - Création de HTML";

content.insertAdjacentElement("afterbegin", h1);


const content2 = document.querySelector("#content").innerHTML;


const secondaire = document.querySelector("#secondaire");
secondaire.innerHTML = content2;


const h2 = secondaire.querySelector("h2");
h2.innerText = h2.innerText.replace("Exercice 1", "Exercice 2");

const matiere = document.createElement("div");
matiere.id = "matiere";


const liste = document.createElement("ol");
const dernieresChoses = ["Le DOM", "La création de HTML en JavaScript", "La manipulation de contenu en JavaScript"];

for (const chose of dernieresChoses) {
    const item = document.createElement("li");
    item.innerText = chose;
    liste.appendChild(item);
}

matiere.appendChild(liste);
document.body.appendChild(matiere);

