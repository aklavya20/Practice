let i,
  j,
  star = "";

for (i = 0; i <= 3; i++) {
  for (j = 0; j <= i; j++) {
    star += "* ";
  }
  star += "\n";
}


for (i = 2; i >= 0; i--) {
  for (j = 0; j <= i; j++) {
    star += "* ";
  }
  star += "\n";
}

console.log(star);
