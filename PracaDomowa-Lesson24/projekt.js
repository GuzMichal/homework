let page = 1;
let info = null;

async function main() {
  async function postacie() {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    console.log("Lista Postaci: ", response);
    return response;
  }
  postacie();

  async function postaciedo10() {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    const results = response.results;
    results.splice(10, 20);
    console.log("Lista Postaci do 10: ", response);
    return response;
  }
  postaciedo10();

  function aktualna(data) {
    const $name = document.createElement("h4");
    $name.innerHTML = ` ||*** ${data.name} ***||`;

    const $aktualna = document.getElementById("aktualna");
    $aktualna.appendChild($name);
  }

  const characters = await postaciedo10();
  info = characters.info;
  const $listaPostaci = document.getElementById("liczba-postaci");
  $listaPostaci.innerHTML = characters.info.count;

  characters.results.forEach(aktualna);

  function lista(data) {
    const $card = document.createElement("div");
    $card.classList = "card";

    const $img = document.createElement("img");
    $img.src = data.image;
    $img.alt = data.name;
    $card.appendChild($img);

    const $container = document.createElement("div");
    $container.classList = "container";
    $card.appendChild($container);

    const $name = document.createElement("h1");
    $name.innerHTML = data.name;
    $container.appendChild($name);

    const $type = document.createElement("p");
    $type.innerHTML = data.type;
    $container.appendChild($type);

    const $lista = document.getElementById("lista");
    $lista.appendChild($card);

    const $actualPage = document.getElementById("aktualna-strona");
    $actualPage.innerHTML = page;

    const $maxPages = document.getElementById("max-pages");
    $maxPages.innerHTML = info.pages;
  }

  characters.results.forEach(lista);

  async function createPage() {
    const characters = await postacie();
    info = characters.info;
    const $lista = document.getElementById("lista");
    $lista.innerHTML = "";
    characters.results.forEach(lista);
  }

  createPage();

  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");

  $buttonPrev.addEventListener("click", async (el) => {
    if (info.prev === null) {
      alert("Jesteś na 1 stronie !");
      return;
    }
    page--;
    createPage();
  });

  $buttonNext.addEventListener("click", async (el) => {
    if (info.next === null) {
      alert("Jesteś na ostatniej stronie!");
      return;
    }
    page++;
    createPage();
  });
}
main();
