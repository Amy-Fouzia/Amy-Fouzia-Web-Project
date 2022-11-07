make_base();
setup();
draw();

function make_base()
{
  base_image = new Image();
  base_image.src = 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/22399837/original/1ff0d806f14ac2e69f78783b2e6624f4a872c454/draw-sweetness-illustrations-for-childrens.jpg';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}

function setup() {
    createCanvas(500, 500);
}
  
function draw() {
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, 5, 5);
      fill(0);
    } 
}

