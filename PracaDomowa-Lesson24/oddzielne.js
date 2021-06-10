//Zad1
console.log(
  `W kodzie asynchronicznym kod nie musi byc wykonywany w kolejnosci zapisu. Asynchroniczność procesu cechuje się tym, że mogą się rozpocząć następne operacje nim poprzednie zostały ukończone.`
);

//Zad2
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => {
    console.log("Lista Postaci: ", response.results);
  })

  //Zad3
  .catch((error) => {
    console.log("Ups... coś poszło nie tak!", error);
  });

//Zad4
async function postacie() {
  const data = await fetch(`https://rickandmortyapi.com/api/character`);
  const response = await data.json();
  return console.log("Lista Postaci: ", response.results);
}
postacie();

//Zad5
async function jednaPostac() {
  const data = await fetch(`https://rickandmortyapi.com/api/character/99`);
  const response = await data.json();
  return console.log("Dane Postaci: ", response);
}
jednaPostac();
