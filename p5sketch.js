let redButton; 
let yellowButton;
let blueButton;
let smallButton;
let mediumButton;
let largeButton;
let eraserButton;

function setup() {
  createCanvas(1298, 740);

  redButton = createButton('Red');
  redButton.mousePressed(turnRed);

  yellowButton = createButton('Yellow');
  yellowButton.mousePressed(turnYellow);

  blueButton = createButton('Blue');
  blueButton.mousePressed(turnBlue);

  smallButton = createButton('Thin');
  smallButton.mousePressed(turnSmall);

  mediumButton = createButton('Thick');
  mediumButton.mousePressed(turnMed);

  largeButton = createButton('Thicc');
  largeButton.mousePressed(turnLarge);

  eraserButton = createButton('Eraser');
  eraserButton.mousePressed(eraser);
}

let penColor;
penColor = 0;
let thickness;
thickness = 5;

function turnRed(){
  penColor = 'red';
}

function turnYellow(){
  penColor = 'yellow';
}

function turnBlue(){
  penColor = 'blue';
}

function eraser(){
  penColor = 'white';
}

function turnSmall(){
  thickness = 5;
}

function turnMed(){
  thickness = 15;
}

function turnLarge(){
  thickness = 25;
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, thickness, thickness);
    stroke(penColor);
    fill(penColor);
  } 
}



