let x,
  y,
  txt = "";
const obj = {
  name: "Aklavya Pathak",
  age: 20,
  details: {
    email: "aklavya@gmail.com",
    phone: 9664825164,
  },
};

for (x in obj) {
  if (typeof obj[x] === "object") {
    for (y in obj[x]) {
      txt = txt + obj[x][y] + ", ";
    }
  } else {
    txt = txt + obj[x] + ", ";
  } 
}

console.log(txt);
