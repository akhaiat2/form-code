let i = 0;
let radius = 1;

function setup () {
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function draw () {
  i += 0.2;
  radius++;
  let offsetX = width / 2;
  let offsetY = height / 2;
  let x1 = sin(i * 0.75) * radius + offsetX;
  let y1 = cos(i * 0.75) * radius + offsetY;
  let x2 = sin(i * 0.5) * radius + offsetX;
  let y2 = cos(i * 0.5) * radius + offsetY;
  let x3 = sin(i * 0.25) * radius + offsetX;
  let y3 = cos(i * 0.25) * radius + offsetY;
  let c = color(Math.random()*255, Math.random()*255, Math.random()*255);
  fill(c);
  triangle(x1,y1,x2,y2,x3,y3);
}
