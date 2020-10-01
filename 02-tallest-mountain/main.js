/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE

let tallest = 0;
let heighth = [4, 1800, 2800, 3800, 4475];
let result = document.querySelector("#result");

for (let i = 0; i < 100; i++) {
  heighth.push(Math.floor(Math.random() * 4800));
}

heighth.forEach((height) => {
  if (height > tallest) {
    tallest = height;
  }
});

result.innerHTML = "The tallest mountain is" + "" + tallest + "" + "feet tall!";
