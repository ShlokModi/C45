class Doodler{
    constructor(){
        this.doodler = Bodies.rectangle(200,350,60,60);
        World.add(world,this.doodler);
        this.doodlerLeftImg = loadImage("doodle-jump-doodler.png");
        this.doodlerRightImg = loadImage("doodle-jump-doodler-right.png");
    }
    display(){
        var pos = this.doodler.position;
        fill(204, 200, 52);
        image(this.doodlerLeftImg, pos.x, pos.y, 60, 60);
        doodlerVelocity += 0.2;
        doodler.y += doodlerVelocity;
    }
}