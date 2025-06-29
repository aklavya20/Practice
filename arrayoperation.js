let arr = [4, 8, 2, 5, 20, 10, 3, 6, 7];
let newarr = [];
let i, sum;

for (i = 0; i <= arr.length; i = i + 2) {
  if (arr[i + 1] != undefined) {
    sum = arr[i] + arr[i + 1];
    newarr.push(sum);
  } else {
    newarr.push(arr[i]);
  }
}

console.log(newarr);
