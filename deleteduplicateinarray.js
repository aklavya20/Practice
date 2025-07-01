let newarr = [1, 3, 7, 2, 1, 3, 7];

let myArr = [];
let count = {};

for (let i = 0; i < newarr.length; i++) {
  let item = newarr[i];
  if (!(item in count)) {
    count[item] = true;
    myArr.push(item);
  }
  console.log(count);
}
console.log(myArr);
