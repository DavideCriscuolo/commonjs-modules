// - hobbies.js
// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
// Esporta la funzione dal file.

function hobbyArray(hobbyOne, hobbyTwo, hobbyThree) {
  const hobbies = [];
  hobbies.push(hobbyOne, hobbyTwo, hobbyThree);

  return hobbies;
}

module.exports = hobbyArray;
