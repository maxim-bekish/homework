let array1 = [1, 2, 0, 3, "ef", "56", 34, true, NaN, null, "ef", 0, 45, 1];

let array2 = [
  12,
  45,
  "ef",
  "6",
  34,
  45,
  true,
  NaN,
  null,
  "ef",
  200,
  undefined,
  45,
  1,
];

function sumEvenOddNumbers(myArray) {
  let arrNumber = [];
  for (i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] == "number") {
      arrNumber.push(myArray[i]);
    } else {
    }
  }
  let x = 0;
  let y = 0;
  let z = 0;
  let n = 0;
  for (i = 0; i < arrNumber.length; i++) {
    if (isNaN(arrNumber[i])) {
      n++;
    } else if (arrNumber[i] % 2 == 0 && arrNumber[i] !== 0) {
      x++;
    } else if (arrNumber[i] == 0) {
      z++;
    } else {
      y++;
    }
  }
  console.log(`Четных-${x}, Не четных-${y}, Нулей-${z}, Значений NaN-${n}`);
}
sumEvenOddNumbers(array1);
sumEvenOddNumbers(array2);
