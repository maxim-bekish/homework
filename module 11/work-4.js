function count(numOne, numTwo) {
  let interval = setInterval(function func() {
    if (numOne == numTwo) {
      stop();
    }
    return console.log(numOne++);
  }, 1000);

  function stop() {
    clearInterval(interval);
  }
}
count(2, 5);
