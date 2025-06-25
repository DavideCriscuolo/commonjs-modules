const fullName = require("./name");

const hobbies = require("./hobbies");
const buildPerson = require("./people.js");

const name = "Davide";
const surname = "Criscuolo";
console.log(fullName(name, surname));
console.log(hobbies("Uscire", "Palestra", "Games"));

buildPerson();
