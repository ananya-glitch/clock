var h,m,s;
var hangle, mangle, sangle
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
}

function draw() {
  background(0); 

  translate(250,250);
  rotate(-90)
  h = hour()
  m = minute()
  s = second()
  mangle = map (m,0,60,0,360)
  sangle = map (s,0,60,0,360)
  hangle = map (h%12,0,12,0,360)

  push ();
  rotate (mangle)
  stroke ("green")
  strokeWeight(5)
  line (0,0,85,0)
  pop ();

  push ();
  rotate(sangle)
  stroke ("pink")
  line (0,0,55,0)
  pop ();

  push ();
  rotate(hangle)
  stroke ("yellow")
  line (0,0,35,0)
  pop ();


  noFill()
  stroke ("green")
  strokeWeight (5)
  arc (0,0,300,300,0,mangle)

  stroke ("pink")
  strokeWeight(1)
  arc (0,0,270, 270, 0, sangle)

  stroke ("yellow")
  strokeWeight(1)
  arc(0,0,240, 240, 0, hangle)
}