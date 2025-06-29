let i, j;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let comparr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i <= arr.length - 1; i++) {
  for (j = i; j <= i; j++) {
    if (arr[i] == comparr[j]) {
      console.log(
        "Element fonund at index",
        i,
        "element:",
        arr[i],
        "compare element:",
        comparr[j]
      );
    } else {
      console.log(
        "Element not fonund at index",
        i,
        "element:",
        arr[i],
        "expected element:",
        comparr[j]
      );
    }
  }
}
