let number = +prompt("Введите число до 1000");
if (number > 1000) {
  console.log("вы ввели больше 1000");
} else {
  function test_prime(n) {
    if (n === 1 || n === 0) {
      return `Число ${n} не является простым, но так же не является состовным. Исключение из правил`;
    } else if (n === 2) {
      return `Число ${n} просто`;
    } else {
      for (let x = 2; x < n; x++) {
        if (n % x === 0) {
          return `Число ${n} составное`;
        }
      }
      return `Число ${n} просто`;
    }
  }
  console.log(test_prime(number));
}

