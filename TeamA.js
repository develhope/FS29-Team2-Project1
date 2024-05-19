let gente = [
  {
    name: "Paolo",
    surname: "Rossi",
    age: 30,
    city: "New York",
    hobby: "Leggere",
    favoriteFood: "Booh",
    favoriteVideoGame: "The Legend of Zelda",
    favoriteFilm: "Inception",
    favoriteBook: "1984",
    petName: "",
  },
  {
    name: "Giuseppe",
    surname: "Verdi",
    age: 35,
    city: "Londra",
    hobby: "Palestra",
    favoriteFood: "Sushi",
    favoriteVideoGame: "Pokemon",
    favoriteFilm: "Boris",
    favoriteBook: "Lord of the rings",
    petName: "Pippo",
  },
  {
    name: "Lorenzo",
    surname: "Neri",
    age: 60,
    city: "Amsterdam",
    hobby: "Programmare",
    favoriteFood: "Kebab",
    favoriteVideoGame: "Final Fantasy",
    favoriteFilm: "Casablanca",
    favoriteBook: "1984",
    petName: "",
  },
];
// - Print the team middle age.
// - Print who has a pet (name petName).

function middleAge(arr) {
  const etaArray = arr.map((oggetto) => oggetto.age);
  const mediaEta = etaArray.reduce((accum, age) => accum + age, 0);
  return mediaEta / etaArray.length;
}

function whoHasPet(arr) {
  const petPerson = arr.map((persona) => {
    return { name: persona.name, petName: persona.petName };
  });
  return petPerson.filter((person) => person.petName !== "");
}

let midAge = middleAge(gente);
console.log(midAge);
let petNamePerson = whoHasPet(gente);
console.log(petNamePerson);
