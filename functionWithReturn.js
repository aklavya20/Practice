let a, b, c, d, sum, prod;

function sumprod(a, b, c, d) {
  sum = b + c;
  prod = a * d;
  return sum + prod;
}

console.log(sumprod(1, 2, 4, 6));

let arrowSumProd = (a, b, c, d) => {
  sum = b + c;
  prod = a * d;
  return sum + prod;
};

console.log(arrowSumProd(1, 2, 3, 4));
 