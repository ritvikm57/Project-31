class rainDrops{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        this.image = loadImage("DROPS.png");
        World.add(world, this.rain);
        
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,1200), y:random(0,1200)})
        }
    }
    
    display(){
       
        imageMode(CENTER);
       image(this.image, this.rain.position.x,this.rain.position.y,30,30 )
    }
}