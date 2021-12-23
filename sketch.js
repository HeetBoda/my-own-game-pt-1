var bg,stricker1,stricker2
var bg_img,stricker1_img,stricker2_img





function preload(){
background.img = loadImage("background.jpg");
stricker1_img = loadImage("stricker1.jpg");
stricker2_img = loadImage("stricker2.png")
}

function setup (){
  bg = createSprite (width/2,height/2,10,10);
  bg.addImage("bg",background.img);
  bg.scale=0.3;

  stricker1 = createSprite(200,350,50,50)
  stricker1.addImage("stricker1",stricker1_img)
  stricker1.scale=0.3;
  
  stricker2 = createSprite(200,30,50,50)
  stricker2.addImage("stricker2",stricker2_img)
  stricker2.scale=0.1;
}

function draw() {
  background("background.img");
  stricker1.x=World.mouseX;
  drawSprites();
}
