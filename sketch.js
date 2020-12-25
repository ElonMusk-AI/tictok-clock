var hr,mi,se;
var hrAngle,miAngle,seAngle;

function setup() {
  createCanvas(800,400);
  hr = hour();
  mi = minute();
  se = second();

  angleMode(DEGREES);
  
  hrAngle = map(hr,0,24,0,360)
  miAngle = map(mi,0,60,0,360)
  seAngle = map(se,0,60,0,360)

}

function draw() {
  background(0);  
  //hour hands
  push();
  translate()
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  drawSprites();
}