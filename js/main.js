function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255,255,255,125);
  for (var i = 0; i < 100; i++) {
    let x = random(0,width)
    let y = random(0,height)
    let d = random(10, 200)
    let r = random(100, 255)
    let g = random(100, 255)
    let b = random(100, 255)
    fill(r, g, b)
    ellipse(x, y, d)
  }
}
