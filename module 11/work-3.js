function sum(x) {
  return function (y) {
    return x + y;
  };
}
let f = sum(5);
console.log(f(3));
