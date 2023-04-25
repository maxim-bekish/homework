let result = +prompt("Введите четное число");

if (isNaN(result % 2)) {
  console.log("не число");
} else if (result % 2 == 0) {
  console.log("четное");
} else {
  console.log("не четное");
}
