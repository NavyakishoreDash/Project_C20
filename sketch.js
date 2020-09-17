var car1,wall1;

var speed,weight;

function setup() {
  createCanvas(1192.5,400);

  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50,200,50,40);
  car1.velocityX = speed;
  car1.shapeColor=color(255,255,255);

  wall1=createSprite(1140,200,60,400);
  wall1.shapeColor=color(255,255,255);
}



function draw() {
  background(52,205,255);

if(wall1.x-car1.x < (car1.width+wall1.width)/2){
  car1.velocityX=0
  var deformation=0.5*weight*speed*speed/22500;
  console.log(deformation);
  if(deformation>180){
    car1.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car1.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car1.shapeColor=color(0,255,0);
  }
}

  drawSprites(); 
}