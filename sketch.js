var fixedrect,movingrect;



function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";

  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
 background(255,255,255);  
movingrect.y=World.mouseY;
movingrect.x=World.mouseX;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2){
movingrect.shapeColor="red";
fixedrect.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
 fixedrect.shapeColor="green";
}






  drawSprites();
}