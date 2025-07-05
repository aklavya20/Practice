let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];

console.log(newArr);

const car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
  power: "800HP",
};

const newCar = {
  type: "Muscle Car",
  year: "2024",
  color: "yellow",
  power: "1200HP",
};

const Car2024 = { ...car, ...newCar };

console.log(Car2024);
