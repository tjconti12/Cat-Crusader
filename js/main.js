// DOM Elements
const canvas = document.querySelector('#game_display');
const ctx = canvas.getContext('2d');
const width = canvas.width = 1200;
const height = canvas.height = 672;
const resetModal = document.querySelector('.resetModal');
const resetModalXButton = document.querySelector('.resetModal__closeButton');
const resetButton = document.querySelector('.resetModal__button');
const winModal = document.querySelector('.winModal');
const nextLevel = document.querySelector('.winModal__nextButton');
const menuButton = document.querySelector('.winModal__menuButton');


const backgroundCanvas = document.querySelector('#game_background');
const backgroundctx = backgroundCanvas.getContext('2d');
const backgroundWidth = backgroundCanvas.width = 1200;
const backgroundHeight = backgroundCanvas.height = 672;

const secondaryBackground = document.querySelector('#secondary_background');
const secondaryBackgroundctx = secondaryBackground.getContext('2d');
const secondaryBackgroundWidth = secondaryBackground.width = 1200;
const secondaryBackgroundHeight = secondaryBackground.height = 672;

const backgroundImg = document.querySelector('.map-background');

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics


// Global Variables
const gameHeight = height;
const gameWidth = width;
let tileSize = 16;
let tileOutputSize = 3;

let updatedTileSize = tileSize * tileOutputSize;

const gameLevels = [];
let currentLevel = 0;

let oldPositionDelay = 0; // Adding a delay to updating old position to decrease margin of error

let levelPlayerSizeX = 80; // 80
let levelPlayerSizeY = 64; // 64
let levelPlayerYoffset = 20;

// For Background Imgs
let caveBackground = new Image();
caveBackground.src = './images/caveBackground.jpeg';

let forestBackground = new Image();
forestBackground.src = './images/forestBackground.jpeg';




// DOM Related Functions
const toggleElementDisplay = (element) => {
    element.classList.toggle('hidden');
}

// For now Ill refresh the page. I hope to reset without a reset
const refreshPage = () => {
    location.reload();
}


// DOM Event Listeners

resetModalXButton.addEventListener('click', () => {
    toggleElementDisplay(resetModal);
});

resetButton.addEventListener('click', refreshPage);


nextLevel.addEventListener('click', () => {
    winModal.classList.add('hidden');
    if (backgroundImg.hasChildNodes('img')) {
        backgroundImg.removeChild(caveBackground);
    }
    backgroundctx.clearRect(0, 0, gameWidth, gameHeight);
    currentLevel += 1;
    gameLevels[currentLevel]();
    gameEngineDecider = true;
    gameRun();
    
})



// Cat animation
// x is 88, y is 64
const standingLeft = [(88 * 3) - 18, 64 * 0];
const standingRight = [(88 * 1) -5, 64 * 5];
const jumpingLeft = [(88 * 0) - 5, 64 * 0];
const jumpingRight = [(88 * 4) - 17, 64 * 5];
const walkingLeft = [
    [88 * 0, 64 * 1],[88 * 1, 64 * 1],[88 * 2, 64 * 1],[88 * 3, 64 * 1],[88 * 4, 64 * 1],[88 * 5, 64 * 1]
]
const walkingRight = [ // needed an offset of -8 for some reason due to the tile sheet layout
    [(88 * 5) - 8, 64 * 4],[(88 * 4) - 8, 64 * 4],[(88 * 3) - 8, 64 * 4],[(88 * 2) - 8, 64 * 4],[(88 * 1) - 8, 64 * 4],[(88 * 0) - 8, 64 * 4]
];
const runningLeft = [
    [88 * 0, 64 * 2],[88 * 1, 64 * 2],[88 * 2, 64 * 2],[88 * 3, 64 * 2],[88 * 4, 64 * 2],[88 * 5, 64 * 2]
];
const runningRight = [ // needed an offset of +7 for some reason due to the tile sheet layout
    [(88 * 5) + 7, 64 * 3],[(88 * 4) + 7, 64 * 3],[(88 * 3) + 7, 64 * 3],[(88 * 2) + 7, 64 * 3],[(88 * 1) + 7, 64 * 3],[(88 * 0) + 7, 64 * 3],
];



let animationPositionIndex = 0;
let loopIndex = 0;
// Test Rectangle Player
// Decided to make the Player a class
class Player {
    constructor(){
        this.width = 36;
        this.height = 36;
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
        if(this.position.x <= 0) {
            this.position.x = 0
        } else if (this.position.x > gameWidth - this.width) {
            this.position.x = gameWidth - this.width;
        }
        if(this.position.y >= gameHeight - this.height) {
            this.position.y = gameHeight - this.height -10;
        }
        if(this.speed.x < 0.1 && this.speed.x > -0.1) { // added this if statement to keep character from gliding on their own
            this.speed.x = 0;
        }
        if (oldPositionDelay % 50 === 0) {
            this.oldPosition.x = this.position.x;
            this.oldPosition.y = this.position.y;
        }
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



// Enemy Animation variables
const enemyWalkingLeft = [
    [68 * 0, 40 * 0],[68 * 1, 40 * 0],[68 * 2, 40 * 0],[68 * 3, 40 * 0],[68 * 4, 40 * 0],[68 * 5, 40 * 0]
]

const enemyWalkingRight = [
    [68 * 5, 40 * 1],[68 * 4, 40 * 1],[68 * 3, 40 * 1],[68 * 2, 40 * 1],[68 * 1, 40 * 1],[68 * 0, 40 * 1]
]

let enemyPositionIndex = 0;
let enemyLoopIndex = 0;
// Enemy Class


class Enemy {
    constructor(name){
        this.name = name;
        this.width = 25;
        this.height = 25;
        this.color = 'red';
        this.speed = {x: 0, y: 0};
        this.position = {x: 250, y: gameHeight - this.height - 100};
        this.oldPosition = {x: 0, y: gameHeight - this.height};
        this.moveCounter = 0;
        this.moveDirectionStart = 2;
        this.Image = Object.assign(new Image, {src: './images/dogSpriteSheet.gif'});
        this.colors = {
            brown: 0,
            gray: 2,
            white: 4
        }
        
    }
    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Used during prototype testing before using an actual image
        if(this.moveCounter % 100 < 50) {
            ctx.drawImage(this.Image, enemyWalkingLeft[enemyPositionIndex][0], enemyWalkingLeft[enemyPositionIndex][1], 68, 40, this.position.x, this.position.y, 68,44);
            } else {
                ctx.drawImage(this.Image, enemyWalkingRight[enemyPositionIndex][0], enemyWalkingRight[enemyPositionIndex][1], 68, 40, this.position.x, this.position.y, 68,44);
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


let enemyArr = [];

const newEnemy = new Enemy('num1');
newEnemy.position.x = 280;
enemyArr.push(newEnemy);









// document.addEventListener('keyup', (event) => {
//     if(event.keyCode === 37) {
//         newPlayer.speed.x += 0.9;
//     } else if (event.keyCode === 39) {
        
//     }
    
// })
const friction = () => {
    if(newPlayer.speed.x > 0) {
        newPlayer.speed.x -= 0.3;
        if (newPlayer.speed.x < 0) {
            newPlayer.speed.x = 0;
        }
    } else if (newPlayer.speed.x < 0) {
        newPlayer.speed.x += 0.3;
        if (newPlayer.speed.x > 0) {
            newPlayer.speed.x = 0;
        }
    }
}

const gravity = () => {
    // if(newPlayer.position.y < gameHeight - newPlayer.height) {
        
    // }
    newPlayer.speed.y += 1;
    enemyArr.forEach(enemy => {
        enemy.speed.y += 1;
    })
}









// Test for collision




const win = () => {
    toggleElementDisplay(winModal);
    gameEngineDecider = false;
    
}

const lose = () => {
    console.log('You lose!');
    toggleElementDisplay(resetModal);
    gameEngineDecider = false;
}











/*
Reference for canvas, ctx, requestAnimationFrame
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

Reference for tiles and tile maps
https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
 */