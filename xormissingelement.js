let arr = [1, 3, 5, 7, 9, 2, 6, 8];

let n = 9,
  i,
  xor1,
  xor2,
  missing;

for (i = 0; i <= n; i++) {
  xor1 = xor1 ^ i;
}

for (i = 0; i <= arr.length; i++) {
  xor2 = xor2 ^ arr[i];
}

missing = xor1 ^ xor2;
console.log(missing);
