let a, b, c, sum, prod;

function addition(a, b, c) {
  return (sum = a + b + c);
}

function multiplication(a, b, c) {
  return (prod = a * b * c);
}

function final(a, b, c) {
  sum = addition(a, b, c);
  prod = multiplication(a, b, c);
  console.log(sum + prod);
}

final(10, 20, 30);
