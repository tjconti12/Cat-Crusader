// Class related global variables
let levelPlayerSizeX = 80; // 80      // This allows me to change the size of the character depending on the level
let levelPlayerSizeY = 64; // 64
let levelPlayerYoffset = 20;          // This offset is to correct changes when resizing the character on different levels

let levelEnemySizeX = 68;             // This allows me to change the size of the enemy depending on the level
let levelEnemySizeY = 44;
let levelEnemyYoffset = 20;            // This offset is to correct changes when resizing the enemy on different levels
// Decided to make the Player a class
class Player {
    constructor(){
        this.width = 36;
        this.height = 36;
        this.health = 5;
        this.speed = {x: 0, y: 0};
        this.position = {x: gameWidth - this.width - 100, y: gameHeight - this.height - 150};
        this.oldPosition = {x: 0, y: gameHeight - this.height};
        this.leftKeyDown = false;
        this.rightKeyDown = false;
        this.color = 'black';
        this.jumping = false;
        this.Image = Object.assign(new Image, {src: './images/catspritesheet.gif'});
    }
    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.jumping === true && this.oldPosition.x >= this.position.x) {
            ctx.drawImage(this.Image, jumpingLeft[0], jumpingLeft[1], 80, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.jumping === true && this.oldPosition.x < this.position.x) {
            ctx.drawImage(this.Image, jumpingRight[0], jumpingRight[1], 80, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.speed.x < -0.2 && this.speed.x > -4) {
            ctx.drawImage(this.Image, walkingLeft[animationPositionIndex][0], walkingLeft[animationPositionIndex][1], 88, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.speed.x > 0.2 && this.speed.x < 4) {
            ctx.drawImage(this.Image, walkingRight[animationPositionIndex][0], walkingRight[animationPositionIndex][1], 88, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.speed.x <= -4) {
            ctx.drawImage(this.Image, runningLeft[animationPositionIndex][0], runningLeft[animationPositionIndex][1], 88, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.speed.x >= 4) {
            ctx.drawImage(this.Image, runningRight[animationPositionIndex][0], runningRight[animationPositionIndex][1], 88, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else if (this.speed.x === 0 && this.oldPosition.x >= this.position.x) { 
            ctx.drawImage(this.Image, standingLeft[0], standingLeft[1], 80, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY);
        } else {
            ctx.drawImage(this.Image, standingRight[0], standingRight[1], 80, 64, this.position.x -10, this.position.y - levelPlayerYoffset, levelPlayerSizeX, levelPlayerSizeY); // For static
        } 
  
        if(loopIndex % 15 === 0) {
            animationPositionIndex +=1;
        }
        if(animationPositionIndex === 5) {
            animationPositionIndex = 0;
        }
        loopIndex +=1;
    }
    moveLeft() {
        // if(this.speed.x === 0) {
        //     this.speed.x -= -3;
        // }
        this.speed.x -= .4;
        
    }
    moveRight() {
        // if(this.speed.x === 0) {
        //     this.speed.x += 3;
        // }
        this.speed.x += .4;
        // console.log(this.speed.x);
        
    }
    checkLeftKeyDown() {
        if(this.leftKeyDown) {
            this.moveLeft();
        } 
    }
    checkRightKeyDown() {
        if(this.rightKeyDown) {
            this.moveRight();
        } 
    }


    jump() {
        if(this.speed.y === 0) {
            this.speed.y = -15;
            this.jumping = true;
        }
        // console.log(this.position.y);        
    }
    update() {
        if(this.position.x < 5) {
            this.position.x = 5;
            this.speed.x = 0;
        } else if (this.position.x > gameWidth - this.width - 5) {
            this.position.x = gameWidth - this.width - 5;
            this.speed.x = 0;
        }
        if(this.position.y > gameHeight - this.height - 5) {
            this.position.y = gameHeight - this.height -5;
            this.speed.y = 0;
        } else if (this.position.y < 10) {
            this.position.y = 10;
            this.speed.y = 0;
        }
        if(this.speed.x < 0.1 && this.speed.x > -0.1) { // added this if statement to keep character from gliding on their own
            this.speed.x = 0;
        }
        if (oldPositionDelay % 50 === 0) {
            this.oldPosition.x = this.position.x;
            this.oldPosition.y = this.position.y;
        }
        // livesCounter.innerText= newPlayer.health; // Decided to use picture logos instead
        oldPositionDelay += 1;
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.speed.y < 10.5 && this.speed.y > -10.5) { // Had to add buffer here because collision logic was not allowing speed.y to go to 0
            this.jumping = false;
        }
        
    }
    

}

const newPlayer = new Player;


// newPlayer.draw(ctx);

// ctx.fillRect(gameWidth /2, 500,100,100);





let enemyPositionIndex = 0;
let enemyLoopIndex = 0;
// Enemy Class


class Enemy {
    constructor(){
        this.width = 25;
        this.height = 25;
        this.color = 'red';
        this.speed = {x: 0, y: 0};
        this.position = {x: 250, y: gameHeight - this.height - 100};
        this.oldPosition = {x: 0, y: gameHeight - this.height};
        this.moveCounter = 0;
        this.moveDirectionStart = 2;
        this.colorCode = 0; // The offset number to set the enemy color
        this.Image = Object.assign(new Image, {src: './images/dogSpriteSheet.gif'});
        this.colors = {
            brown: 0,
            gray: 2,
            white: 4
        };
        this.enemyWalkingLeft = [
            [68 * 0, 40 * this.colorCode],[68 * 1, 40 * this.colorCode],[68 * 2, 40 * this.colorCode],[68 * 3, 40 * this.colorCode],[68 * 4, 40 * this.colorCode],[68 * 5, 40 * this.colorCode]
        ];
        this.enemyWalkingRight = [
            [70 * 5, 40 * (this.colorCode + 1)],[70 * 4, 40 * (this.colorCode + 1)],[70 * 3, 40 * (this.colorCode + 1)],[70 * 2, 40 * (this.colorCode + 1)],[70 * 1, 40 * (this.colorCode + 1)],[70 * 0, 40 * (this.colorCode + 1)]
        ]
        // Change to loops
    }
    setColor (color) {
        if(color === 'brown') {
            this.colorCode = 0; 
        } else if (color === 'gray') {
            this.colorCode = 2;
        } else if (color === 'white') {
            this.colorCode = 4;
        }
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Used during prototype testing before using an actual image
        if(this.moveCounter % 100 < 50) {
            ctx.drawImage(this.Image, this.enemyWalkingLeft[enemyPositionIndex][0], this.enemyWalkingLeft[enemyPositionIndex][1], 68, 40, this.position.x, this.position.y - levelEnemyYoffset, levelEnemySizeX,levelEnemySizeY);
            } else {
                ctx.drawImage(this.Image, this.enemyWalkingRight[enemyPositionIndex][0], this.enemyWalkingRight[enemyPositionIndex][1], 68, 40, this.position.x, this.position.y - levelEnemyYoffset, levelEnemySizeX, levelEnemySizeY);
            }
        if(enemyLoopIndex % 15 === 0) {
            enemyPositionIndex +=1;
        }
        if(enemyPositionIndex === 5) {
            enemyPositionIndex = 0;
        }
        enemyLoopIndex +=1;
    }
    move() {
        if (this.moveCounter % 100 < 50) {
            this.position.x -= this.moveDirectionStart;
        } else {
            this.position.x += this.moveDirectionStart;
        }
        this.moveCounter += 1;
        this.oldPosition.y = this.position.y;
        this.oldPosition.x = this.position.y;
        this.position.y += this.speed.y;
        
    }
}

// Enemy Animation variables




let enemyArr = [];
