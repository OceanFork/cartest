var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  //car.shapeColor = (0,255,0)
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (255,255,255)
  speed = random(55,90);
  weight = random(400,1500);
 car.velocityX = speed/5;
  deformation = 0.5 * weight * speed * speed/ 22500
  console.log = deformation;
}

function draw() {
  background(0,0,0); 
 // collide(car,wall);
 if(car.x > 1440 && deformation < 100){
car.velocityX = 0;
car.shapeColor = color(0,255,0);

 }
 if(car.x > 1440 && deformation > 100  &&  deformation < 180){
  car.velocityX = 0;
  car.shapeColor = color(230,255,0);
  
   }
   if(car.x > 1440 && deformation > 180){
    car.velocityX = 0;
    car.shapeColor = color(255,0,0);
    
     }



  drawSprites(); 
}
