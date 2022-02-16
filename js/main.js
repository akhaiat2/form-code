let i = 0;
let radius = 1;

function setup () {
  createCanvas(innerWidth, innerHeight, WEBGL);
  background(0);
}

function draw () {
  i+= 0.5;
  radius++;
  let offsetX = width / 2;
  let offsetY = height / 2;
  let x1 = sin(i * 0.75) * radius + offsetX;
  let y1 = cos(i * 0.75) * radius + offsetY;
  let c = color(random(0,255), 0, 0);
  fill(c);
  rotateX(frameCount*0.001);
  rotateY(frameCount*0.001);
  torus(x1,y1);
}
