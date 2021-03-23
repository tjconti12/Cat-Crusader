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

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics


// Global Variables
const gameHeight = height;
const gameWidth = width;
let tileSize = 16;
let tileOutputSize = 3;

let updatedTileSize = tileSize * tileOutputSize;

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
    toggleElementDisplay(winModal);
    backgroundctx.clearRect(0, 0, gameWidth, gameHeight);
    level2();
})

// Test Rectangle Player
// Decided to make the Player a class
class Player {
    constructor(){
        this.width = 35;
        this.height = 35;
        this.speed = {x: 0, y: 0};
        this.position = {x: gameWidth - this.width - 100, y: gameHeight - this.height - 150};
        this.oldPosition = {x: 0, y: gameHeight - this.height};
        this.leftKeyDown = false;
        this.rightKeyDown = false;
        this.color = 'black';
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
    }
    

}

const newPlayer = new Player;
// newPlayer.draw(ctx);

// ctx.fillRect(gameWidth /2, 500,100,100);


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
        
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    move() {
        if (this.moveCounter % 100 < 50) {
            this.position.x -= 2;
        } else {
            this.position.x += 2;
        }
        this.moveCounter += 1;
        this.oldPosition.y = this.position.y;
        this.position.y += this.speed.y;
    }
}



const newEnemy = new Enemy;









// document.addEventListener('keyup', (event) => {
//     if(event.keyCode === 37) {
//         newPlayer.speed.x += 0.9;
//     } else if (event.keyCode === 39) {
        
//     }
    
// })
const friction = () => {
    if(newPlayer.speed.x > 0) {
        newPlayer.speed.x -= 0.3;
    } else if (newPlayer.speed.x < 0) {
        newPlayer.speed.x += 0.3;
    }
}

const gravity = () => {
    // if(newPlayer.position.y < gameHeight - newPlayer.height) {
        
    // }
    newPlayer.speed.y += 1;
    newEnemy.speed.y += 1;
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