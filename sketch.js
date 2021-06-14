const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops = []
var maxrainDrops = 100
var thunderCreatedFrame=0;
var thunder;

function preload(){
  thunder1 = loadImage("thunderbolt/1.png")
  thunder2 = loadImage("thunderbolt/2.png")
  thunder3 = loadImage("thunderbolt/3.png")
  thunder4 = loadImage("thunderbolt/4.png")
  
}

function setup() {
    createCanvas(1200,600);
   engine = Engine.create();
   world = engine.world;
 
    if(frameCount % 150 === 0){
      for(var i=0; i<maxrainDrops; i++){
      raindrops.push(new rainDrops(random(0,1200), random(0,1200)));
      }
    }  
    umbrella = new Umbrella(200,400)

    
  }

function draw(){
  background(0);
  Engine.update(engine);
    for(var i = 0; i<maxrainDrops; i++){
        raindrops[i].display();
        raindrops[i].updateY()
        }
  rand=Math.round(random(1,4))
  if (frameCount%80===0){
    thunderCreatedFrame=frameCount;

    thunder = createSprite(random(10,370, random(10,30),10,10));
    switch(rand){
      case 1: thunder.addImage(thunder1);
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3: thunder.addImage(thunder3);
      break;
      case 4: thunder.addImage(thunder4);
      break;
      default: break;
    }
    thunder.scale = random(0.3,0.6)
   } 
   if (thunderCreatedFrame+10 === frameCount && thunder){
     thunder.destroy();
   }
   umbrella.display();
   drawSprites();
}   

