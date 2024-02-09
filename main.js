/*
var tagQuantity = {};

var tags = [
  "li",
  "div",
  "li",
  "p",
  "h1",
  "p",
  "h1",
  "div",
  "div",
  "li",
  "h1",
  "p",
  "h1",
  "ol",
  "br",
];

tags.forEach((tag) => {
  if (tagQuantity[tag]) {
    tagQuantity[tag]++;
  } else {
    tagQuantity[tag] = 1;
  }
});

console.log(tagQuantity);
*/

let firstArray = [
  1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76,
];
let secondArray = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

let commonElements = [];

firstArray.forEach((element) => {
  if (secondArray.includes(element)) {
    commonElements.push(element);
  }
});

console.log(commonElements);
