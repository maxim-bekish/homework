let arr = [1, 2, 0, 3, "ef", "56", 34, true, NaN, null, "ef", 0, 45, 1];
let arrNumber = [];
for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    arrNumber.push(arr[i]);
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
