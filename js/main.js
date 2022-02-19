let i = 0;
let radius = 1.0;
//3D shapes with WEBGL + Canvas by p5.js

function myFunction() {
  document.getElementById("warningSign").style.display = "none";
}

function setup () {
  createCanvas(innerWidth, innerHeight, WEBGL);
  background(color(random(0,255), random(0,255), random(0,255)));
  frameRate(random(10,60));
}

//drawing a torus using draw function p5.js + rotate + sin + cos
function draw () {
  i+= 0.5;
  radius++;
  let offsetX = width / 2;
  let offsetY = height / 2;
  let x1 = sin(i * 0.5) * radius + offsetX;
  let y1 = cos(i * 0.5) * radius + offsetY;
  let c = color(random(0,255), random(0,255), random(0,255));
  fill(c);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  if (mouseIsPressed === true) cone(x1,y1);
  else torus(x1,y1);
}
