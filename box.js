class box{

    constructor(x,y,width,height,){
    
    var options={
        friction:0.06,
   
    density:0.06,
   
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.Visiblity = 255;
    World.add(world,this.body)
    }
    
    display(){
       
        if(this.body.speed < 5){
           
           
    var pos=this.body.position
    push();
    rectMode(CENTER)
    fill("pink")
    
    rect(pos.x,pos.y,this.width,this.height)
    pop();
        }
    
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
    }
    }