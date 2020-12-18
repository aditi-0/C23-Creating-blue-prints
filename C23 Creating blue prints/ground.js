//class classname
class Ground{
    constructor(){          //function setup()
        var options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(200,390,400,20,options);
        World.add(world,this.body);
    }

    display(){              //function draw()
        var abc = this.body.position
        fill("yellow")
rectMode(CENTER);
rect(abc.x,abc.y,400,20);
    }
}