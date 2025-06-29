let i, j;

for (i = 1; i <= 3; i++) {
  let str = 0;
  for (j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

for (i = 3; i >= 1; i--) {
  let str = 0;
  for (j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
