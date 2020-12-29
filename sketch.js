var hr,mi,se;
var hrAngle,miAngle,seAngle;

function setup() {
  createCanvas(600,800);
}

function draw() {
  background(0);  
  hr = hour();
  mi = minute();
  se = second();

  angleMode(DEGREES);
  
  hrAngle = map(hr%12,0,12,0,360)
  miAngle = map(mi,0,60,0,360)
  seAngle = map(se,0,60,0,360)

  stroke("red")
  strokeWeight(10);
  noFill();
  arc(300, 400, 440, 440, -90,  seAngle);

  stroke(color(0,255,0))
  strokeWeight(10);
  noFill();
  arc(300, 400, 400, 400, -90,  miAngle);

  stroke("blue")
  strokeWeight(10);
  noFill();
  arc(300, 400, 360, 360, -90,  hrAngle);

  hourHand();
  minuteHand();
  secondHand();

  
  drawSprites();
}


function hourHand(){
  push();
  translate(300,400)
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(10);
  line(0,0,100,0);
  pop();
}
function minuteHand(){
  push();
  translate(300,400)
  rotate(miAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line(0,0,125,0);
  pop();
}
function secondHand(){
  push();
  translate(300,400)
  rotate(seAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,150,0);
  
  pop();
}
