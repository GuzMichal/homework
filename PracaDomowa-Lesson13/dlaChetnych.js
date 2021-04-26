/* Zad.1 */

const car = {
  make: "BMW",
  model: "M3",
  year: 2000,
};

function carList(make, model, year) {
  return `Twoj nowy samochód to ${car.make} ${car.model} z ${car.year} roku `;
}
console.log(carList());

function carObject(obj) {
  return `Twoj nowy samochód to ${obj.make} ${obj.model} z ${obj.year} roku `;
}
console.log(carObject(car));

/* Zad.2 */

const { make, model, year } = car;

console.log(make);
console.log(model);
console.log(year);

/* Zad.3 */

function carObject({ make, model, year }) {
  return `Twoj nowy samochód to ${make} ${model} z ${year} roku `;
}
console.log(carObject(car));

/* Zad.4 */

let x = 5;

console.log(x); /* log ze zmiennej przekazuje nam tylko zmienną (x=5)*/
console.log(
  ++x
); /* zastosowanie ++ przed zmienną dodaje 1 do zmiennej w bieżącej linijce kodu (5+1=6)*/
console.log(
  x
); /* log ze zmiennej po inkrementacji w poprzedniej linijce kodu (x=6)*/
console.log(
  x++
); /* zastosowanie ++ po zmiennej dodaje jeden, ale dopiero w następnej linijce kodu. Obecna da wartość (x=6) */
console.log(x); /* log ze miennej po inkrementacji zapisanej za zmienną (x=7) */

/* Zad.5 */

function kosz() {
  let aktualnyWynik = 0;

  function rzutZaDwaPkt() {
    aktualnyWynik = aktualnyWynik + 2;
    console.log("Rzut za dwa punkty");
  }

  function rzutZaTrzyPkt() {
    aktualnyWynik = aktualnyWynik + 3;
    console.log("Rzut za trzy punkty");
  }

  function pokazWynik() {
    console.log(aktualnyWynik);
  }

  return {
    pokazWynik,
    rzutZaDwaPkt,
    rzutZaTrzyPkt,
  };
}

const stan = kosz();
stan.pokazWynik();
stan.rzutZaDwaPkt();
stan.rzutZaDwaPkt();
stan.rzutZaTrzyPkt();
stan.pokazWynik();

/* Zad.6 */

const pralka = {
  nazwa: "LG",
  liczbaFunkcji: 12,
  information() {
    return `Oto Twoja nowa pralka marki ${this.nazwa}, która ma ${this.liczbaFunkcji} funkcji prania`;
  },
};
console.log(pralka.information());

/* Zad.7*/

/* Różnica pomiędzy kopią a referencją polega na tym że:
  Gdy tworzymy kopię elementu to tworzymy drugi element identyczny jak element kopiowany, ale w przypadku wprowadzenia zmian w elemencie kopiowanym nie przenoszą się na kopię, np:*/

let oryginal = 100;

let kopia = oryginal;

console.log(oryginal);
console.log(kopia);

oryginal = 50;

console.log(oryginal);
console.log(kopia);

/* Jak widać wartość kopi nie zmieniła się pomimo zmian w oryginale */
/* Kopie możemy wykonywać z danych w typie prostym tj:  string, number, boolean. */

/* W przypadku tworzenia referencji nie tworzymy drugiego elementu tylko odniesienie do miejsca w kodzie w którym znajduje się dany element. (Nasza referencja jest jakby linkiem do elementu źródłowego). Dlatego zmiany wprowadzone na którymkolwiek z elementów powodują zmianę w obydwu z nich. */

let zrodlo = {
  auto: "BMW",
};

let referencja = zrodlo;

console.log(zrodlo.auto);
console.log(referencja.auto);

zrodlo.auto = "Porsche";

console.log(zrodlo.auto);
console.log(referencja.auto);

referencja.auto = "Volvo";

console.log(zrodlo.auto);
console.log(referencja.auto);

/* Referencje możemy wykonywać z danych w typie złozonym tj: object, array. */
