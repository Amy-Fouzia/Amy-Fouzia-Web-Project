function setup() {
  createCanvas(1298, 740);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 5, 5);
    fill(0);
  } 
}
