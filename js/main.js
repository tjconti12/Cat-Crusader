// DOM Elements
const canvas = document.querySelector('#game_display');
const ctx = canvas.getContext('2d');
const width = canvas.width = 1200;
const height = canvas.height = 672;



const backgroundCanvas = document.querySelector('#game_background');
const backgroundctx = backgroundCanvas.getContext('2d');
const backgroundWidth = backgroundCanvas.width = 1200;
const backgroundHeight = backgroundCanvas.height = 672;

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics


// Global Variables
const gameHeight = height;
const gameWidth = width;
let tileSize = 16;
let tileOutputSize = 3;

let updatedTileSize = tileSize * tileOutputSize;

// Test Rectangle Player
// Decided to make the Player a class
class Player {
    constructor(){
        this.width = 25;
        this.height = 25;
        this.speed = {x: 0, y: 0};
        this.position = {x: 100, y: gameHeight - this.height - 150};
        this.oldPosition = {x: 0, y: gameHeight - this.height};
        this.leftKeyDown = false;
        this.rightKeyDown = false;
    }
    draw(ctx) {
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
            this.speed.y = 15;
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
        this.position.y -= this.speed.y;
    }
    

}

const newPlayer = new Player;
// newPlayer.draw(ctx);

// ctx.fillRect(gameWidth /2, 500,100,100);


// Controls

document.addEventListener('keydown', (event) => {
    // How I determined the value of each keyboard key
    // console.log(event.keyCode)
    // // Left arrow: 37
    // // Right arrow: 39
    // // Up arrow: 38
    // // Space Bar 32
    if(event.keyCode === 37) {
        // console.log('You pushed the left arrow!');
        newPlayer.leftKeyDown = true;
        
    } else if (event.keyCode === 39) {
        // console.log('You pushed the right arrow!');
        newPlayer.rightKeyDown = true;
        
    } else if (event.keyCode === 32) {
        // console.log('You pushed the space bar');
        newPlayer.jump();
    }
})

document.addEventListener('keyup', (event) => {
    if(event.keyCode === 37) {
        newPlayer.leftKeyDown = false;
    } else if (event.keyCode === 39) {
        newPlayer.rightKeyDown = false;
    }
})


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
    if(newPlayer.position.y < gameHeight - newPlayer.height) {
        newPlayer.speed.y -= 1;
    }
}



// Need to make a game loop to keep redrawing square

const gameRun = () => {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    newPlayer.draw(ctx);
    friction();
    gravity();
    newPlayer.update();
    checkPosition(newPlayer);
    newPlayer.checkLeftKeyDown();
    newPlayer.checkRightKeyDown();
    requestAnimationFrame(gameRun);
}
requestAnimationFrame(gameRun);







// Test for collision


// Collision Functions

const collideLeft = (currentCol, currentRow) => {
    if(newPlayer.oldPosition.x < newPlayer.position.x) {
        newPlayer.speed.x = 0;
    }
    newPlayer.position.x = currentCol * updatedTileSize - updatedTileSize - newPlayer.width;
}

const collideBottom = (currentCol, currentRow) => {
    if(newPlayer.oldPosition.y > newPlayer.position.y) {
        newPlayer.speed.y = 0;
    }
    newPlayer.position.y = currentRow * updatedTileSize + updatedTileSize;
}

const collideRight = (currentCol, currentRow) => {
    if(newPlayer.oldPosition.x > newPlayer.position.x) {
        newPlayer.speed.x = 0;
    }
    newPlayer.position.x = currentCol * updatedTileSize + updatedTileSize - 1;
}

const collideTop = (currentCol, currentRow) => {
    let top = currentRow * updatedTileSize;
    if(newPlayer.position.y + newPlayer.height > top && newPlayer.oldPosition.y < newPlayer.position.y) {
        newPlayer.speed.y = 0;
        newPlayer.position.y = top - newPlayer.height;
    }
}





const collisionMap = [
    5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,
    4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,3,3,0,0,0,
    4,0,0,0,0,0,0,0,0,0,13,0,0,0,9,3,0,3,3,5,0,0,0,0,0,
    4,0,0,0,0,9,3,11,0,0,5,3,3,3,0,0,0,0,0,0,0,0,0,0,0,
    4,0,3,3,0,6,1,8,0,0,6,1,1,1,1,8,0,0,0,0,0,0,0,0,0,
    4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    4,0,0,0,0,0,0,9,3,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    4,0,0,3,3,0,0,2,5,4,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,
    5,3,0,0,0,0,2,5,4,4,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,
    5,5,0,0,0,0,0,2,5,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
    5,5,3,3,3,3,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
];

const collisionMapRows = 14;
const collisionMapCols = 25;


const collision = {
    1: collideBottom,
    2: collideLeft,
    3: collideTop,
    4: collideRight,
    5: (collideBottom, collideLeft, collideTop, collideRight),
    6: (collideBottom, collideLeft),
    7: (collideBottom, collideTop),
    8: (collideBottom, collideRight),
    9: (collideLeft, collideTop),
    10: (collideLeft, collideRight),
    11: (collideRight, collideTop),
    12: (collideBottom, collideLeft, collideRight),
    13: (collideTop, collideLeft, collideRight)
}





function checkPosition (player) {
    // Declaring values for use in checkPosition Function
    let currentCol = 0;
    let currentRow = 0;
    let positionOnMapValue = 0;


    //  Test top left corner
    currentCol = Math.floor(player.position.x / updatedTileSize);
    currentRow = Math.floor(player.position.y / updatedTileSize);
    postionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    
    if(postionOnMapValue != 0) {
        collision[postionOnMapValue](currentCol, currentRow);
    }


    //  Test top right corner
    currentCol = Math.floor((player.position.x + player.width) / updatedTileSize);
    currentRow = Math.floor(player.position.y / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow);
    }

    //  Test bottom left corner
    currentCol = Math.floor(player.position.x / updatedTileSize);
    currentRow = Math.floor((player.position.y + player.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    // console.log(postionOnMapValue);
    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow);
    }

    
    //  Test bottom right corner
    currentCol = Math.floor((player.position.x + player.width) / updatedTileSize);
    currentRow = Math.floor((player.position.y + player.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow);
    }

}   


















// Reference for canvas, ctx, requestAnimationFrame
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

// Reference for tiles and tile maps
// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps