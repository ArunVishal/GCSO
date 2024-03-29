var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 75, 50);
  wall = createSprite(1500, 200, 60, 200);
}

function draw() {
  background(0,0,255); 
  car.shapeColor = color (0, 0, 0);
  wall.shapeColor = color (80, 80, 80); 
  car.velocityX = speed;
  if((wall.x - car.x) < ((car.width + wall.width) / 2)){
      car.velocityX = 0;
      var deformation 
      deformation = (0.5 * weight * speed * speed) / 22500
      
      if(Math.round(deformation) > 180){
        car.shapeColor = color(255,0,0);
      } else if((Math.round(deformation) > 100 && Math.round(deformation) < 180) || Math.round(deformation) == 180){
        car.shapeColor = color(255,255,0);
      } else if(Math.round(deformation) < 100 || Math.round(deformation) == 100){
        car.shapeColor = color(0,255,0);
      }
      console.log (Math.round(deformation));
  }
  drawSprites();
}