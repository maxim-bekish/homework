let x = NaN;
switch (typeof x) {
  case "number":
    console.log(x + " Number");
    break;
  case "string":
    console.log(x + " String");
    break;
  case "boolean":
    console.log(x + " Boolean");
    break;
  default:
    console.log(x + " НЕ  ОПРЕДЕЛЕННО");
}
