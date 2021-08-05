var fixedRect, movingRect;
var object1, object2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  object1 = createSprite(100,400,30,70)
  object1.shapeColor = "red"
  object1.debug = true;

  object2 = createSprite(1100,400,30,70);
  object2.shapeColor = "purple";
  object2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityX = +5
  object2.velocityX = -5
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect)
bounceOff(object1,object2)
  drawSprites();
}


