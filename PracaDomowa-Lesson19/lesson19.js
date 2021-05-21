//REDUCE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Zad1

const sum = array.reduce(function (acc, item) {
  return acc + item;
}, 0);

console.log(`Suma elementów tablicy array to:`, sum);

//Zad2
const evenFilter = array.filter(function (item) {
  return item % 2 == 0;
});

const even = evenFilter.reduce(function (acc, item) {
  return acc + item;
}, 0);

console.log(`Suma parzystych elementów tablicy array to:`, even);

//Zad3

const sumPlusTen = array.reduce(function (acc, item) {
  return acc + item;
}, 10);

console.log(`Suma elementów tablicy array po dodaniu 10 to:`, sumPlusTen);

//Zad4

console.log(
  `Jeżeli nie podamy initialValue to accumulatorem bedzie pierwszy element danej tablicy`
);

//Zad5

console.log(`Po podaniu initialValue pierwszy element bedzie miał index 0`);

//Zad6

function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
  let wartosc;
  let index = 0;
  if (wartoscPoczatkowa === undefined) {
    index = 1;
    wartosc = array[0];
  } else {
    index = 0;
    wartosc = wartoscPoczatkowa;
  }
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    wartosc = funkcjaRedukujaca(wartosc, item);
  }
  return wartosc;
}

function redukcja(prev, element) {
  return prev + element;
}

const wynik = reduce(redukcja, 0);

console.log("Wynik to:", wynik);

//SOME I EVERY

const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

//Zad7

function biggerThan50(item) {
  return item > 50;
}
someArray.some(biggerThan50);

console.log(someArray.some(biggerThan50));

//Zad8

function allBiggerThan2(item) {
  return item >= 2;
}

someArray.every(allBiggerThan2);

console.log(someArray.every(allBiggerThan2));

//Zad9

console.log(
  `Metoda SOME zwraca true kiedy którykolwiek z elementów tablicy spełnia warunek funkcji, za to EVERY zwraca true gdy spełnia go każdy z elementów.`
);

//Zad10

function modulo7(item) {
  return item % 2 == 0;
}

someArray.some(modulo7);

if (someArray.some(modulo7) == true) {
  console.log(`W tablicy znajduje się element podzielny przez 7`);
}

//Zad11

function some(someArray) {
  for (i = 0; i < someArray.length; i++) {
    if (someArray[i] > 50) {
      return true;
    }
  }
  return false;
}
console.log(some(someArray));

//Zad12

function every(someArray) {
  let arrayTrue = [];
  let arrayFalse = [];
  for (i = 0; i < someArray.length; i++) {
    if (someArray[i] > 2) {
      arrayTrue.push(someArray[i]);
    } else {
      arrayFalse.push(someArray[i]);
    }
  }
  if (arrayFalse == 0) {
    return true;
  } else return false;
}
console.log(every(someArray));

//FUNKCJE i METODY REDUCE, SOME i EVERY

//Zad13

const typeOfArray = [5, `five`, 10, `ten`, 15, `fifteen`];

function sumNumbers(array) {
  const numbers = array

    .filter(function (actualValue) {
      if (typeof actualValue == "number") {
        return true;
      }
    })

    .reduce(function (acc, item) {
      return acc + item;
    }, 0);

  return numbers;
}

console.log(`Suma elementów typu number to: `, sumNumbers(typeOfArray));

//Zad14

const reduceArray = [10, 20, 30, 40];

function minus(array, initialValue) {
  const reduceMinus = array.reduce(function (acc, item) {
    return acc - item;
  }, initialValue);
  return reduceMinus;
}

console.log(`Wynik odejmowania to :`, minus(reduceArray, 0));

//Zad15

const pisaki = [`długopis`, `kredki`, `pióro`, `ołówek`, `marker`];

function lookFor(array, searchFor) {
  if (array.includes(searchFor)) {
    return true;
  } else {
    return false;
  }
}

console.log(`Czy tablica zawiera szukane słowo?:`, lookFor(pisaki, `kredki`));

//PROTOTYPY

//Zad16

const Car = function (model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log(`Jedziemy !`);
};

const Volvo = new Car(`V50`, 2004, `czarny`);
console.log(Volvo);

const BMW = new Car(`E30`, 1990, `czerwony`);
console.log(BMW);

//Zad17

console.log(
  `Przy użyciu słówka "new" wskazujemy, że bedziemy tworzyć nowy obiekt na podstawie stworzonego wcześniej konstruktora`
);

//Zad18

Car.prototype.tankFuel = function () {
  console.log(`Brak paliwa, zatankuj !`);
};
Car.prototype.stop = function () {
  console.log(`Zatrzymaj samochód !`);
};

Volvo.tankFuel();
Volvo.stop();

BMW.tankFuel();
BMW.stop();
