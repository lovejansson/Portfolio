export class Particle{

    constructor(ctx,x,y,radius,color, tinkle, drift){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.tinkle = tinkle;
        this.drift = drift;
    }

    update(){
        
        if(this.tinkle){

            this.radius -= 1;
            console.log("update")
    
            if(this.radius <= 0.1){
                this.radius = Math.random();
            }
        }else if(this.drift){

        //   let xChange =  Math.floor(Math.random() * 2) === 1 ? Math.random() * -1 : Math.random() * 1;
        //   let yChange =  Math.floor(Math.random() *2) === 1 ? Math.random() * -1 : Math.random() * 1;

        //   this.x += xChange;
        //   this.y += yChange;
        }
     
    }

    draw(){

        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }

}