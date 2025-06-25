// people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
const fullName = require("./name");
const hobbies = require("./hobbies");

function buildPerson() {
  const persona = {
    fullName: fullName("Davide", "Criscuolo"),
    hobbies: hobbies("Uscire", "Palestra", "Games"),
  };

  return persona;
}

module.exports = buildPerson;
console.log(buildPerson());
