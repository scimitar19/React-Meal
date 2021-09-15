/*
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
let test = DUMMY_MEALS.map((value, key) => value.id);
console.log(test);




let arr = [
  { name: "Sushi", price: 22.33 },
  { name: "Tuna", price: 11.35 },
  { name: "Burger", price: 13.75 },
  { name: "Cheesburger", price: 143.75 },
];

function first() {
  for (let i = 0; i < 2; i++) {
    arr[i].amount = 34;
  }
  //const sum = toCarting.map((value) => value.price);
}
second();
let sum = [];
const proto = [[], [], [], [], [], []];

let total = [];
let stall = { dardo: 12, paraga: 12.3 };

const mixed = [
  { name: "DADDA", lastName: "dsadsa", price: 23 },
  { name: "apappa", lastName: "dkjkjkja", price: 42 },
  { name: "ARPANET", lastName: "LELELEL", price: 12 },
];

//console.log(mixed.map((value, index) => value.name));

for (let i = 0; i < mixed.length; i++) {
  console.log("yyyyyyyyyyyyyyyyyy");
}

const news = mixed.map((value, index) => [
  { ...value, dardo: stall.dardo, paraga: stall.paraga },
]);

console.log(news);
*/

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    idForI: 1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    idForI: 2,
  },
];
const AMOUNT = [27, 3];

const testing = [...DUMMY_MEALS];
testing.map((value, index) => (value.amount = AMOUNT[index]));
//const updated = DUMMY_MEALS.map((value, index) => ...value);
console.log(testing.map((value, index) => index));
//console.log(testing);
