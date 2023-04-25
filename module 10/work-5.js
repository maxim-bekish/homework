let arr = [1, "hello", 33, true, -23];
console.log(arr.length);

// способ 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// способ 2
arr.forEach(function (item) {
  console.log(item);
});
