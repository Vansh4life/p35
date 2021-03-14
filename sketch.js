var balloon;

function preload(){
  backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png");

  balloonImg = loadImage("pro-C35 images/Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg);
}

function draw() {
  background(backgroundImg);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y - 10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y + 10;
}

  drawSprites();
}
