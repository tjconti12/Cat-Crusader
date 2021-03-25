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
const startButton = document.querySelector('#start-button');
const titlePage = document.querySelector('.title-page');
const livesCounter = document.querySelector('#lives-counter');
const healthIcon1 = document.querySelector('#health1');
const healthIcon2 = document.querySelector('#health2');
const healthIcon3 = document.querySelector('#health3');
const healthIcon4 = document.querySelector('#health4');
const healthIcon5 = document.querySelector('#health5');
const loadingH2 = document.querySelector('.loading-screen-h2');
const gameOverModal = document.querySelector('.gameOver-modal');



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



let collisionMap = []; // Needed to declare this before gameRun function in loading screen
let collisionMapCols = 25;
let collisionMapRows = 14;

// For Background Imgs
let caveBackground = new Image();
caveBackground.src = './images/caveBackground.jpeg';

let forestBackground = new Image();
forestBackground.src = './images/forestBackground.jpeg';

const healthIconsArr = [healthIcon1, healthIcon2, healthIcon3, healthIcon4, healthIcon5];


// DOM Related Functions
const toggleElementDisplay = (element) => {  // This function only works sometimes?? 
    element.classList.toggle('hidden');
}

const showElement = (element) => {
    element.classList.remove('hidden');
}

const hideElement = (element) => {
    element.classList.add('hidden');
}



const restartGame = () => {
    // location.reload();
    hideElement(resetModal);
    backgroundctx.clearRect(0, 0, gameWidth, gameHeight);
    gameLevels[currentLevel]();
    enemyArr.pop();
    gameEngineDecider = true;
    gameRun();
}


// DOM Event Listeners

startButton.addEventListener('click', () => {
    letIntroRun = false;
    hideElement(startButton);
    hideElement(titlePage);
    loadingScreen();
    // gameRun();
    // level1();
    
})

resetModalXButton.addEventListener('click', () => {
    toggleElementDisplay(resetModal);
});

resetButton.addEventListener('click', restartGame);


nextLevel.addEventListener('click', () => {
    winModal.classList.add('hidden');
    if (backgroundImg.hasChildNodes('img')) {
        backgroundImg.removeChild(caveBackground);
    }
    currentLevel += 1;
    secondaryBackgroundctx.clearRect(0, 0, gameWidth, gameHeight);
    backgroundctx.clearRect(0, 0, gameWidth, gameHeight);
    movingX = 1150;
    showElement(loadingH2);
    loadingScreen();
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
    if(newPlayer.speed.y < 4) {
        newPlayer.speed.y += 1;
    } else {
        newPlayer.speed.y = 4;
    }
    enemyArr.forEach(enemy => {
        enemy.speed.y += 1;
    })
}









// Test for collision




const win = () => {
    toggleElementDisplay(winModal);
    gameEngineDecider = false;
    console.log('win!');
}

const lose = (character) => {
    character.health -= 1;
    if(character.health === 0) {
        showElement(gameOverModal);
    } else {
        console.log('You lose!');
        showElement(resetModal);
        gameEngineDecider = false;
        hideElement(healthIconsArr[character.health]); 
    }
}









/*
Reference for canvas, ctx, requestAnimationFrame
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

Reference for tiles and tile maps
https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
 */