let i = 0;
let radius = 1.0;
let pauseState = false;
//3D shapes with WEBGL + Canvas by p5.js

function myFunction() {
  document.getElementById("warningSign").style.display = "none";
}

function setup () {
  createCanvas(innerWidth, innerHeight, WEBGL);
  background(0);
  frameRate(random(10,60));
  let c = color(255,255,255);
}

//drawing a torus using draw function p5.js + rotate + sin + cos
function draw () {
  let h = hour();
  i+= 0.5;
  radius++;
  let offsetX = width / 2;
  let offsetY = height / 2;
  let x1 = sin(i * 0.5) * radius + offsetX;
  let y1 = cos(i * 0.5) * radius + offsetY;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 6 || h >= 19) {
    r = random(0, 85);
    g = random(0,85);
    b = random(0,85);
  }
  else if ((h >= 6 && h < 8) || (h >= 16 && h < 19)) {
    r = random(0, 170);
    g = random(0, 170);
    b = random(0, 170);
  }
  else {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
  c = color(r,g,b)
  fill(c);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  orbitControl(2,2);
  torus(x1,y1);
}

function mousePressed() {
  frameRate(20);
}

function mouseReleased() {
  frameRate(random(10,60));
}

function keyPressed () {
  if (key == ' ' && pauseState == false) {
    frameRate(0);
    saveCanvas('Canvas_By_Anthony_Khaiat', 'jpg');
    pauseState = true;
  }
  else if (key == ' ' && pauseState == true) {
    pauseState = false;
    frameRate(random(10,60));
  }
}
