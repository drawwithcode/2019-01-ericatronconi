function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  background(0);
  frameRate(12);
}

function draw() {
push();
  translate(width / 2, height / 2);
  noFill();
  stroke (lerpColor(
    color ("palevioletred"),
    color ("mediumseagreen"),
    frameCount / 72));
  line(100, 0, cos(frameCount * 5) * 100, sin(frameCount * 5) * 100);
  pop();

  if (frameCount == 72) {
  noLoop();
  }
}
