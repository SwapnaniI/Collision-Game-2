var car,wall;
var speed,weight;
var def;


function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 25);
  wall = createSprite(1540, 200, 10, 50);

  speed=Math.round(random(50,90));
  weight=Math.round(random(1000,1600));
}

function draw() {
  background("blue"); 
  car.shapeColor="white"
  wall.shapeColor="white" 
  car.velocityX=speed;
  
//Deformation
def=0.5*speed*speed*weight/22500;

if(car.x>=1510){

  if(def<100){
    car.shapeColor=color(0,255,0);
  } else if((def>100)&&(def<180)){
    car.shapeColor=color(230,230,0);
  } else {
    car.shapeColor=color(255,0,0);
  }
  
  car.velocityX=0;
  car.x=1510;
  
}


  drawSprites();
}