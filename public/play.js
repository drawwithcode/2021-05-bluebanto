let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log("Your id: ", clientSocket.id);
}

// esegui questa funzione con i dati ricevuti
function newBroadcast(data) {
  console.log(data);
  line(data.x, data.y, data.px, data.py);
}

function setup() {
  createCanvas(450, 680).parent("sketch");
  background("#FD4100");
  stroke("white");
  strokeWeight(4);
}

// save a screenshot
function saveScreenshot() {
  let date = new Date();
  let currentDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();
  saveCanvas("ourimg_" + currentDate, "png");
}

function draw() {
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseDragged() {
  let message = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
  };

  clientSocket.emit("mouse", message);
}
