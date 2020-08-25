var wall, thickness

var bullet, speed, weight

var equation

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);  

  if (isTouching(car,wall)){
    deformation(weight,speed);
  }  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
    }
    else{
      return false;
    }
}

function deformation(object1, object2){
  tOW = thickness*thickness*thickness
  equation = 0.5*object1*object2*object2/tOW;
  //equation = 110
  if (equation<10){
    car.shapeColor = "green";
    car.velocityX = 0;
  }
  else if (equation>10){
    car.shapeColor = "red";
    car.velocityX = 0;
  }
}