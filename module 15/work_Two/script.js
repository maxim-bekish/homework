let socket = new WebSocket("wss://echo-ws-service.herokuapp.com");
let counterClass = 0;

function createText(message, classN, tag, latitude, longitude) {
  counterClass++;
  let elemDiv = document.createElement("div");
  elemDiv.id = `elemDiv${counterClass}`;
  elemDiv.className = `${classN}`;
  let elem = document.createElement(`${tag}`);
  switch (tag) {
    case "a":
      {
        elem.textContent = `${message}`;
        elem.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        elem.target = "_blank";
      }
      break;
    case "span":
      {
        elem.textContent = `${classN}: ${message}`;
      }
      break;
  }
  document.getElementById("messages").append(elemDiv);
  document.getElementById(`elemDiv${counterClass}`).append(elem);
}
document.getElementById("button_message").addEventListener("click", () => {
  let input = document.getElementById("input");
  if (!input.value.trim()) {
    input.value = "";
    input.placeholder = "You need to enter text sms";
  } else {
    let valueMessage = input.value.trim();
    input.value = "";
    input.placeholder = "Enter message";
    createText(valueMessage, "user", "span");
    socket.send(`${valueMessage}`);
    socket.onmessage = function (event) {
      createText(event.data, "server", "span");
    };
  }

  socket.onclose = function (evt) {
    createText("DISCONNECTED", "error", "span");
  };
  socket.onerror = function (event) {
    writeToScreen(event.data, "error", "span");
  };
});
document.getElementById("button_geolocation").addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
      const { coords } = position;
      createText("Open link", "user", "a", coords.latitude, coords.longitude);
    }
    function error(err) {
      createText(err.message, "error", "span");
    }
  }
});
document.getElementById("button_clear").addEventListener("click", () => {
  document.querySelectorAll(".user").forEach((elem) => elem.remove());
  document.querySelectorAll(".server").forEach((elem) => elem.remove());
  document.querySelectorAll(".error").forEach((elem) => elem.remove());
});
