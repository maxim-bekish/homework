let arr = [1, 2, 3, "ef", 34, "ef", 1, 1];
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++)
    if (arr[i] == arr[j]) {
      console.log(true);
    } else {
      console.log(false);
    }
}
