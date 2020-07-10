class Platform{
    constructor(){
        var options = {
            isStatic: true
        }
        this.platform = Bodies.rectangle(random(15, 300),550,85,15,options);
        World.add(world,this.platform);
        this.image = loadImage("doodle-jump-platform.png");
    }
    display(){
        var pos = this.platform.position;
        fill(106, 186, 40);
        image(this.image, pos.x, pos.y, 85,15);
    }
    drawPlatforms(){
        platformList.forEach(function(plat) {
            plat.yPos += platYChange;
            if(plat.yPos > 600) {
                score++;
                platformList.pop();
                var newPlat = new Platform(0);
                platformList.unshift(newPlat); 
        }
    });
    }

    setupPlatforms() {
    for(var i=0; i < 5; i++) {
        var platGap = height / 5;
        var newPlatformYPosition = i * platGap;
        var plat = new Platform(newPlatformYPosition);
        platformList.push(plat);
  }
}
    Platform(newPlatformYPosition) {
        this.xPos = random(15, 300);
        this.yPos = newPlatformYPosition;
        this.width = 85;
        this.height = 15;
        console.log(this.yPos);
}
}