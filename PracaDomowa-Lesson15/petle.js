/* Zad1 */

/* a) */

for (i = 1; i < 10; i++) {
  console.log(i);
}

/* b) */

for (i = 9; i > 0; i--) {
  console.log(i);
}

/* c) */

for (i = 5; i < 16; i++) {
  console.log(i);
}

/* d) */

for (i = 0; i > -11; i--) {
  console.log(i);
}

/* e) */

for (i = 1; i < 21; i += 2) {
  console.log(i);
}

/* f) */

for (i = 10; i > -11; i -= 4) {
  console.log(i);
}

/* g) */

for (i = 1; i < 101; i = i * 2) {
  console.log(i);
}

/* Zad2 */

/* a) */

for (i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* b) */

for (i = 0; i < 21; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

/* c) */

for (i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(`${i} to liczba parzysta`);
  } else {
    console.log(`${i} to liczba nieparzysta`);
  }
}

/* d) */

for (i = 0; i < 31; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  } else console.log(i);
}

/* e) */

for (i = 100; i >= 0; i -= 5) {
  if (i % 10 == 0) {
    console.log(`Liczba ${i} jest podzielna przez 10`);
  } else console.log(i);
}

/* Zad3 */

/* a) */

function loopOne(parametrDo) {
  for (i = 0; i <= parametrDo; i++) {
    console.log(i);
  }
}
loopOne(9);

/* b) */

function loopTwo(parametrOd) {
  for (i = parametrOd; i <= 15; i++) {
    console.log(i);
  }
}
loopTwo(9);

/* c) */

function loopThree(parametrIteracji) {
  for (i = 0; i <= 15; i += parametrIteracji) {
    console.log(i);
  }
}
loopThree(3);

/* d) */

function loopFour(parametrOd, parametrDo) {
  for (i = parametrOd; i <= parametrDo; i++) {
    console.log(i);
  }
}
loopFour(0, 5);

/* e) */

function loopFive(parametrOd, parametrDo, parametrIteracji) {
  for (i = parametrOd; i <= parametrDo; i += parametrIteracji) {
    console.log(i);
  }
}
loopFive(0, 30, 5);

/* Zad4 */

/* a) */

const carParts = [`felgi`, `turbo`, `wtryski`, `sprzęgło`, `docisk`];

function partsList(parameter) {
  for (i = 0; i < parameter.length; i++) {
    console.log(parameter[i]);
  }
}
partsList(carParts);

/* b) */

const names = [`Władek`, `Bronek`, `Ździsiek`, `Kazik`, `Alfred`];

function sayHello(parameter) {
  for (i = 0; i < parameter.length; i++) {
    console.log(`Cześć ${parameter[i]}`);
  }
}
sayHello(names);

/* c) */

const cars = [
  {
    model: `M5`,
    color: `niebieskie`,
  },
  {
    model: `911`,
    color: `zółte`,
  },
  {
    model: `R8`,
    color: `białe`,
  },
  {
    model: `Huracan`,
    color: `pomarańczowy`,
  },
  {
    model: `GTR`,
    color: `czarny`,
  },
];

function carsColors(parameter) {
  for (i = 0; i < parameter.length; i++) {
    console.log(`Przed Wami stoi ${parameter[i].color} ${parameter[i].model}`);
  }
}
carsColors(cars);

/* d) */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showEven(parameter) {
  for (i = 0; i <= parameter.length; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
showEven(numbers);

/* e) */

const random = [
  `Włodek`,
  785,
  true,
  `pijak`,
  102,
  `akrobata`,
  false,
  undefined,
  0,
];

function showString(parameter) {
  for (i = 0; i <= parameter.length; i++) {
    if (typeof parameter[i] == `string`) {
      console.log(parameter[i]);
    }
  }
}
showString(random);

/* f) */

const random = [
  `Włodek`,
  785,
  true,
  `pijak`,
  102,
  `akrobata`,
  false,
  undefined,
  0,
];

const newBoard = [];

console.log(newBoard);

function makeBoard(parameter) {
  for (i = 0; i <= parameter.length; i++) {
    if (typeof parameter[i] == `number`) {
      newBoard.push(parameter[i]);
    }
  }
}

makeBoard(random);

console.log(newBoard);

/* Zad5 */

/* a) */

const numbersToSum = [5, 10, 15, 20, 25];

function sum(parameter) {
  let result = 0;
  for (i = 0; i < parameter.length; i++) {
    result += parameter[i];
  }
  console.log(result);
}
sum(numbersToSum);

/* b) */

const numbersMixed = [5, 10, 15, 20, 25, 30];

let even = [];
let odd = [];

function divide(parameter) {
  for (i = 0; i < parameter.length; i++) {
    if (parameter[i] % 2 == 0) {
      even.push(parameter[i]);
    } else {
      odd.push(parameter[i]);
    }
  }
}
divide(numbersMixed);
console.log(even);
console.log(odd);

/* c) */

const strings = [`łysy`, `jeżyk`, `wódeczka`, `kartofel`];

function seekForY(parameter) {
  for (i = 0; i < parameter.length; i++) {
    if (parameter[i].includes(`y`) == true) {
      console.log(`Jest Y w ${parameter[i]}!`);
    } else {
      console.log(`Nie ma Y w ${parameter[i]}`);
    }
  }
}
seekForY(strings);

/* d) */

function multiply(parameter) {
  for (i = parameter - 1; i > 0; i--) {
    parameter *= i;
  }
  console.log(parameter);
}
multiply(4);

/* e) */

const tabZadE = [1, 2, `text1`, `text2`];
const tabPusta = [];
const string = `string`;
const number = `number`;
const lipa = `lipa`;

function combine(parameterOne, parameterTwo) {
  if (parameterOne.length == 0) {
    console.log(`Tablica jest pusta!`);
  } else {
    for (i = 0; i < parameterOne.length; i++) {
      if (parameterTwo == `string`) {
        console.log(parameterOne[i] + parameterTwo);
      } else if (parameterTwo == `number`) {
        console.log(parameterOne[i] + parameterTwo);
      } else {
        console.log(`Drugi parametr jest nieprawidłowy`);
      }
    }
  }
}

combine(tabZadE, string);
combine(tabZadE, number);
combine(tabZadE, lipa);
combine(tabPusta, lipa);

/* f) */

const arrayOfObjects = [
  {
    name: `Wojciech`,
    lastName: `Wojciechowski`,
    hasCar: true,
    hasDrivingLicence: true,
  },
  {
    name: `Marian`,
    lastName: `Mariański`,
    hasCar: false,
    hasDrivingLicence: true,
  },
  {
    name: `Tomasz`,
    lastName: `Tomaszewski`,
    hasCar: true,
    hasDrivingLicence: false,
  },
  {
    name: `Jakub`,
    lastName: `Jakubowski`,
    hasCar: false,
    hasDrivingLicence: false,
  },
];

function check(parameter) {
  for (i = 0; i < parameter.length; i++)
    if (parameter[i].hasCar == true && parameter[i].hasDrivingLicence == true) {
      console.log(
        `${parameter[i].name} ${parameter[i].lastName} może Cię odwieźć do domu.`
      );
    } else if (
      parameter[i].hasCar == false &&
      parameter[i].hasDrivingLicence == true
    ) {
      console.log(
        `${parameter[i].name} ${parameter[i].lastName} może Cię odwieźć do domu, ale trzeba zorganizować samochód.`
      );
    } else if (
      parameter[i].hasCar == true &&
      parameter[i].hasDrivingLicence == false
    ) {
      console.log(
        `${parameter[i].name} ${parameter[i].lastName} ma samochód, ale trzeba zorganizować kierowcę.`
      );
    } else if (
      parameter[i].hasCar == false &&
      parameter[i].hasDrivingLicence == false
    ) {
      console.log(
        `${parameter[i].name} ${parameter[i].lastName} Cię nie odwiezie bo rozbił samochód po pijaku i stracił prawko.`
      );
    }
}
check(arrayOfObjects);

/* g) */

const tabZadG = [1, 2, 3];

console.log(tabZadG);

function checkTab(parameter, newElement) {
  for (i = 0; i < parameter.length; i++) {
    if (parameter.includes(newElement) == true) {
      console.log(`Tablica posiada już ${newElement}`);
    } else if (parameter.includes(newElement) == false) {
      parameter.push(newElement);
      console.log(`Dodano element ${newElement}`);
    }
  }
}

checkTab(tabZadG, 1);
checkTab(tabZadG, 4);
console.log(tabOne);
