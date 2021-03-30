const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var divisions = []
var plinko = []
var particles = []

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  world = engine.world;

  border1 = new Ground(5, 400, 10, 800)
  border2 = new Ground(475, 400, 10, 800)
  border3 = new Ground(240, 5, 480, 10)
  border4 = new Ground(240, 795, 480, 10)

  for (var k = 80; k <=width-10; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width-10; j=j+50) {
       plinko.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {
       plinko.push(new Plinko(j,175));
    }
    for (var j = 35; j <=width-10; j=j+50) {
      plinko.push(new Plinko(j,275));
   }
   for (var j = 50; j <=width-10; j=j+50) {
    plinko.push(new Plinko(j,375));
 }
  

}

function draw() {
  background(0);

 Engine.update(engine)

  border1.display()
  border2.display()
  border3.display()
  border4.display()


  for(var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }


  if(frameCount%60 === 0){
    particles.push(new Particles(random(20, 460), 40, 10))
  }
  for (var p = 0; p < particles.length; p++){
    particles[p].display()
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  drawSprites();
}
