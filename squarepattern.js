let i, j, p;

const pattern = (p) => {
  for (i = 1; i <= p; i++) {
    let star = "";
    for (j = 1; j <= p; j++) {
      star += "* ";
    }
    console.log(star);
  }
};

pattern(6);
