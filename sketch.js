var wall,thicknesss,bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thicknesss = random(22,83);
  wall = createSprite(1200,200,thicknesss,height/2);

  speed = random(223,321);
  weight = random(30,52);
  
}

function draw() {
  
  bullet.velocityX = speed;

  if (collisionDetect(bullet,wall)) {
    
    bullet.velocityX = 0;

    var damage = (0.5*weight*speed*speed)/(thicknesss*thicknesss*thicknesss);

    if (damage <= 10) {

      wall.shapeColour = "green"
      
    } else {
      
      wall.shapeColour = "reds"

    }

  }

}