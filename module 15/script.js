
let work = "https://rms2022.pythonanywhere.com/categoris/";
let test = "http://jsonplaceholder.typicode.com/posts";

// work товоя api
// test тестовая

fetch(work)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });