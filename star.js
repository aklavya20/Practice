let i, j;

const starPattern = (n) => {
  for (i = n; i >= 1; i--) {
    let star = "";
    for (j = 1; j <= i; j++) {
      star = star + " *";
    }
    console.log(star);
  }
};
starPattern(4);
