function setup() {
  createCanvas(1100, 741);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 5, 5);
    fill(0);
  } 
}
