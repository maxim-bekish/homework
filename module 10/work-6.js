let arr = [1, "", 1, 1];
let x = 0;
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++)
    if (arr[i] === arr[j]) {
    } else {
      x++;
    }
}
x > 0
  ? console.log(`В массиве разные элементы`)
  : console.log(`В массиве одинаковые элементы`);
