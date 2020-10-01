/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4];
// YOUR CODE HERE
let result = document.querySelector("#result");
let i = 0;
let newArray = [];
while (i < redundantArray.length) {
  newArray = [...new Set(redundantArray)];
  i++;
}
result.innerText =
  "This is the redundant list" +
  redundantArray +
  "And this is the redundancy removed" +
  newArray;
