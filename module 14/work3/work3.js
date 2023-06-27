let input = document.querySelector(".input");
let resultNode = document.querySelector(".resultNode");

document.querySelector(".button").addEventListener("click", () => {
  useRequest("https://picsum.photos/v2/list?limit=", displayResult);
});

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  let number = input.value;

  xhr.open("GET", `${url}${number}`, true);
  if (1 <= number && number <= 10) {
    xhr.onload = function () {
      if (xhr.status != 200) {
        console.log(`ops, status ${xhr.status}`);
      } else {
        let result = JSON.parse(xhr.response);

        if (callback) {
          callback(result);
        }
      }
    };
    xhr.onerror = function () {
      console.log(`Error ${xhr.status}`);
    };
    xhr.send();
  } else {
    resultNode.innerHTML = "Число вне диапазона от 1 до 10";
  }
}

function displayResult(apiData) {
  let cards = "";
  apiData.forEach((item) => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}
