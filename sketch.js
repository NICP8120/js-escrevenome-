function setup() {
    createCanvas(500, 300
              );
    background("black")
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  