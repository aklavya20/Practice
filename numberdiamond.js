let i, j, k, n;

const numberDiamond = (n) => {
  for (i = 1; i <= n; i++) {
    let star = "";
    for (j = i; j < n; j++) {
      star = star + " ";
    }
    for (k = 1; k <= i; k++) {
      star = star + " " + k;
    }
    console.log(star);
  }
  for (i = n - 1; i >= 1; i--) {
    let star = "";
    for (j = 0; j < n - i; j++) {
      star = star + " ";
    }
    for (k = 1; k <= i; k++) {
      star = star + " " + k;
    }
    console.log(star);
  }
};

numberDiamond(4);
