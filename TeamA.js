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
    age: 30,
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
    favoriteFood: "sushi",
    favoriteVideoGame: "Final Fantasy",
    favoriteFilm: "Casablanca",
    favoriteBook: "1984",
    petName: "",
  },
  {
    name: "Nicolas",
    surname: "Papappicco",
    age: 21,
    city: "Bitonto",
    hobby: "Disegnare",
    favoriteFood: "Kimchi",
    favoriteVideoGame: "League of legends",
    favoriteFilm: "A silent voice",
    favoriteBook: "",
    petName: "Nuvola",
  },
  {
    name: "Gianluca",
    surname: "Gruosso",
    age: 26,
    city: "Potenza",
    hobby: "Writing",
    favoriteFood: "Fried courgette flowers",
    favoriteVideoGame: "Simcity 3000",
    favoriteFilm: "Good Will Hunting",
    favoriteBook: "The Picture of Dorian Gray",
    petName: "Sissel",
  },
];

//nomi del team
function fullname(arr) {
  const myFullName = arr.sort((a, b) => {
    if (a.surname < b.surname) {
      return -1;
    }
    if (a.surname > b.surname) {
      return 1;
    }

    return 0;
  });
  return myFullName.map((identity) => {
    return { name: identity.surname, surname: identity.surname };
  });
}

//età maggiore
function olderAge(arr) {
  const olderPerson = arr.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }

    return 0;
  });
  return olderPerson.map((oldPerson) => {
    return { name: oldPerson.name, age: oldPerson.age };
  });
}

//età media
function middleAge(arr) {
  const etaArray = arr.map((oggetto) => oggetto.age);
  const mediaEta = etaArray.reduce((accum, age) => accum + age, 0);
  return mediaEta / etaArray.length;
}

//chi ha animali
function whoHasPet(arr) {
  const petPerson = arr.map((persona) => {
    return { name: persona.name, petName: persona.petName };
  });
  return petPerson.filter((person) => person.petName !== "");
}

// - Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name)
function printLolFans(arr) {
  const lolFansArr = arr.filter(
    (person) =>
      person.favoriteVideoGame.toLowerCase() == "league of legends" ||
      person.favoriteVideoGame.toLowerCase() == "lol"
  );
  const lolFansName = lolFansArr.map((element) => element.name);
  return lolFansName;
}

//Print if there are some members with the same name
function sameName(arr) {
  const nomeArr = arr.map((elemento) => elemento.name);
  const nameCount = {};
  nomeArr.forEach((name) => {
    nameCount[name] = (nameCount[name] || 0) + 1;
  });
  const duplicateNames = Object.keys(nameCount).filter(
    (name) => nameCount[name] > 1
  );
  if (duplicateNames.length > 0) {
    return "members with the same name found";
  } else {
    return "there are no members with the same name";
  }
}

console.log(...printLolFans(gente));
let allID = fullname(gente);
console.log(allID);
let ageRegister = olderAge(gente);
console.log(ageRegister);
let midAge = middleAge(gente);
console.log(midAge);
let petNamePerson = whoHasPet(gente);
console.log(petNamePerson);
let homonymy = sameName(gente);
console.log(homonymy);
