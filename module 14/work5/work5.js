let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
  let one = localStorage.getItem("one");
  let two = localStorage.getItem("two");

  if (1 <= one && one <= 10 && 1 <= two && two <= 10) {
    // if(){
    request(one, two);
    // }
  }
});

document.querySelector(".button").addEventListener("click", displayResult);
document
  .querySelector(".buttonClearStorage")
  .addEventListener("click", () => localStorage.clear());

function displayResult() {
  let numberOne = inputOne.value;
  let numberTwo = inputTwo.value;
  let validity = [];
  let x;

  valid(numberOne, numberTwo, validity);
  recordLocalStorage(numberOne, numberTwo);
  validity.forEach((el) => (x = el));
  if (x) {
    request(numberOne, numberTwo);
  }
}

async function request(numberOne, numberTwo) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${numberOne}&_limit=${numberTwo}`
  );
  api = await res.json();
  if (res.status == "200") {
    let card = "";
    api.forEach((el) => {
      let cards = `<img
          src="${el.url}"
          class="card-image"
        />`;
      card = card + cards;
    });
    content.innerHTML = card;
  } else {
    card.innerHTML = `Код ошибки ${res.status}`;
  }
}

function valid(numberOne, numberTwo, validity) {
  if (
    (1 <= numberOne && numberOne <= 10) ||
    (1 <= numberTwo && numberTwo <= 10)
  ) {
    validity.push(true);

    if (1 <= numberOne && numberOne <= 10) {
      validity.push(true);
    } else {
      validity.push(false);
      return (content.innerHTML = "Номер страницы вне диапазона от 1 до 10");
    }
    if (1 <= numberTwo && numberTwo <= 10) {
      validity.push(true);
    } else {
      validity.push(false);
      return (content.innerHTML = "Лимит вне диапазона от 1 до 10");
    }
  } else {
    validity.push(false);
    return (content.innerHTML =
      "Номер страницы и лимит вне диапазона от 1 до 10");
  }
}

function recordLocalStorage(numberOne, numberTwo) {
  localStorage.setItem("one", numberOne);
  localStorage.setItem("two", numberTwo);
}
