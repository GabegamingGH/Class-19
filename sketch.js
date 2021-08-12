var garden,rabbit;
var gardenImg,rabbitImg;
var fruit, fruitImg;
var leaves,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  fruitImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnFruit()
  spawnLeaves()

  drawSprites();
}

function spawnFruit() {
  if (frameCount%60===0){
    fruit = createSprite(Math.round(random(0,400)),10,20,20)
    fruit.velocityY = 5
    fruit.addImage(fruitImg)
    fruit.scale = 0.05
  }
}

function spawnLeaves() {
  if (frameCount%80===0){
    leaves = createSprite(Math.round(random(0,400)),10,20,20)
    leaves.velocityY = 5
    leaves.addImage(leafImg)
    leaves.scale = 0.05
  }
}