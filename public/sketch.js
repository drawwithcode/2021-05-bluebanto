//dichiaro immagini
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;

function preload() {
  img1 = loadImage("assets/images/1.png");
  img2 = loadImage("assets/images/2.png");
  img3 = loadImage("assets/images/3.png");
  img4 = loadImage("assets/images/4.png");
  img5 = loadImage("assets/images/5.png");
  img6 = loadImage("assets/images/6.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#c5c6d0");
  //posiziono le immagini
  image(img1, 40, 120);
  image(img5, 400, 200);
  image(img3, 1000, 200);
  image(img4, 700, 450);
  image(img2, 100, 450);
  image(img6, 1200, 450);
}

function draw() {}
