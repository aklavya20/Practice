let i, j;

const halfNumberDiamond = (n) => {
  for (i = 1; i <= n; i++) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
      pattern = pattern + j + " ";
    }
    console.log(pattern);
  }

  for (i = n - 1; i >= 1; i--) {
    let pattern = "";
    for (j = 1; j <= i; j++) {
      pattern = pattern + j + " ";
    }
    console.log(pattern);
  }
};
halfNumberDiamond(4);
