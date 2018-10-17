var positionX = 100;
var moving = true;
var isGoingLeft = true;
var counter = 0;
var countUI = document.getElementById("countText");

function setup() {
  createCanvas(400, 200);
  frameRate(20);
}

function draw() {
  background(100);

  rect(positionX, 0, 10, 10);

  if (moving) {
    if (positionX == 0 || positionX < 0){
      isGoingLeft = false;
      counter++;
      countUI.innerHTML = counter;
    }
    if (positionX > 390 ){
      isGoingLeft = true;
      counter++;
      countUI.innerHTML = counter;
    }
    if (!isGoingLeft){
      positionX = positionX + 3;
    } else {
      positionX = positionX - 3;
    }
  }
}

function mousePressed() {
  moving = !moving;
}

