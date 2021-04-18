/* Zad1 */

/* a) */
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 4, 6));

/* b) */

function areaOfTriangle(a, h) {
  const x = 0.5 * a * h;
  return (
    "Pole trójkąta to " +
    x +
    ", czyli ma on " +
    a +
    " długości podstawy i " +
    h +
    " wysokośći."
  );
}
console.log(areaOfTriangle(4, 3));

/* c) */

function drivingLicensse(age, ageOfIssue) {
  return age - ageOfIssue;
}
console.log(drivingLicensse(30, 17));

/* d) */

function consumption(litersPer100km, distanceInKm) {
  return litersPer100km * (distanceInKm / 100);
}
console.log(consumption(10, 500));

/* e) */

function ageAndChildren(name, age, children) {
  return name + " ma " + age + " lata i " + children + " dzieci.";
}
console.log(ageAndChildren("Ala", 23, 2));

/* Zad2 */

/* a) */

const tab = [1, 2, 3, 4, 5];

function getTab(tab) {
  return tab;
}
console.log(getTab(tab));

/* b) */

const carParts = ["turbo", "intercooler", "wtryski"];

function getCarParts(carParts) {
  return carParts[1];
}
console.log(getCarParts(carParts));

/* c) */

const suspension = ["amortyzatory", "sprężyny", "stabilizator"];

function giveString(suspension) {
  return (
    "Przekazana tablica ma " +
    suspension.length +
    " elementy, a elementem nr 3 jest " +
    suspension[2]
  );
}
console.log(giveString(suspension));

/* d) */

const board = [];

function addToBoard(board) {
  board.push("element");
  return board;
}
console.log(addToBoard(board));

/* e) */

const person = {
  name: "Vin",
  surname: "Diesel",
  age: 45,
  height: 180,
};

function getName(person) {
  return person.name;
}
console.log(getName(person));

/* f) */

function returnString(person) {
  return (
    person.name +
    person.surname +
    " ma " +
    person.age +
    " lat i " +
    person.height +
    "cm wzrostu"
  );
}
console.log(returnString(person));

/* g) */

const object = {
  age: 30,
};

function changeAge(object, age) {
  return (age = object.age);
}
console.log(changeAge(object, 15));

/* Zad 3 */

/* a) */

function haveLicensse(age, licensse) {
  if (age < 18) {
    return "Nie ma prawa jazdy";
  } else if (age >= 18 && licensse == false) {
    return "Nie ma prawa jazdy";
  } else return "Możesz śmiało jeździć";
}
console.log(haveLicensse(17, true));

/* b) */

function buyOrSell(string) {
  if (string == "Kup") {
    return "Widzę, że robisz zakupy";
  } else if (string == "Sprzedaj") {
    return "Możesz tutaj swobodnie sprzedawać";
  } else
    return "Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj";
}
console.log(buyOrSell("Nic"));

/* c) */

function positive0negative(number) {
  if (number > 0) {
    return "Liczba jest dodatnia";
  } else if (number == 0) {
    return "Liczba jest równa 0";
  } else return "Liczba jest ujemna";
}
console.log(positive0negative(2));

/* d) */

function dividable(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  }
}
console.log(dividable(30));

/* e) */

function canWatch(age, consent = false) {
  if (age < 15 && consent == false) {
    return "Nie możesz oglądać";
  } else if (age < 15 && consent == true) {
    return "Możesz oglądać";
  } else return "Możesz oglądać";
}
console.log(canWatch(11, true));

/* f) */

const boolean = false;

const yesNo = boolean == true ? "Tak" : "Nie";

console.log(yesNo);

/* g) */

const parameter = 156;

const oddOrEven = (parameter % 2 == 0) == true ? "Parzysta" : "Nieparzysta";

console.log(oddOrEven);

/* Zad 4 */

/* a) */

const car = {
  make: "Porsche",
  model: " 911",
  year: "2021",
  isCabrio: true,
};

function makeCar(car) {
  if (car.year > 2021) {
    return "Auta jeszcze nie wyprodukowano";
  } else
    return (
      "Twój nowy samochód to: " +
      car.make +
      car.model +
      (car.isCabrio ? " cabriolet" : " coupe") +
      " z " +
      car.year +
      " roku "
    );
}
console.log(makeCar(car));

/* b) */

const shopping = [
  "bułki",
  "masło",
  "pomidory",
  "piwo",
  "sok",
  "ziemniaki",
  "ser",
  "parówki",
];

console.log(shopping.length);

function testBoard(shopping) {
  if (shopping.length == 0) {
    return "pusta tablica";
  } else if (shopping.length > 0) {
    return "tablica ma " + shopping.length + " elementów";
  }
}
console.log(testBoard(shopping));

/* c) */

const bookReader = {
  name: "Will",
  surname: "Smith",
  age: 45,
  czyLubiCzytacKsiazki: false,
  maTV: true,
};
const book = {
  title: "Harry Potter",
  type: "fantastyczna",
  numberOfPages: 650,
};

function response(bookReader, book) {
  if (bookReader.czyLubiCzytacKsiazki == true) {
    return `Cześć ${bookReader.name} ${bookReader.surname}, polecam Ci przeczytać książkę ${book.title}, ma tylko ${book.numberOfPages} stron`;
  } else if (
    bookReader.czyLubiCzytacKsiazki == false &&
    bookReader.maTV == true
  ) {
    return `W takim razie idz oglądać TV`;
  } else return `Nie wiem co Ci zaproponować`;
}
console.log(response(bookReader, book));
