// const tiles = {
//     0: {color: '#d8f4f4'}, // sky
//     1: {color: '#ffffff'}, // cloud
//     2: {color: '#3e611e'}, // grass
//     3: {color: '#412823'}  // dirt
// }

let tileAtlas = new Image();
tileAtlas.src = './images/tileAtlas.png';
tileAtlas.onload = draw;

let tileSize = 16;


let gameMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 34, 0, 0, 0, 0, 34, 34, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 7, 8, 9, 10, 
    1, 2, 2, 2, 2, 2, 2, 2, 2, 3,

    
]

let mapRows = 10;
let mapCols = 10;
let mapHeight = mapRows * tileSize;
let mapWidth = mapCols * tileSize;

let mapIndex = 0;
let sourceX = 0;
let sourceY = 0;

function draw() {
    for (let col = 0; col < mapWidth; col += tileSize) {
        for (let row = 0; row < mapHeight; row += tileSize) {
            let tileVal = gameMap[mapIndex];
            if(tileVal != 0) {
                tileVal -=1;
                sourceY = Math.floor(tileVal/mapCols) * tileSize;
                sourceX = (tileVal % mapCols) * tileSize;
                console.log(sourceX, sourceY);
                backgroundctx.drawImage(tileAtlas, sourceX, sourceY, 16, 16, row, col, 16, 16);
            }

            mapIndex ++;
        }
    } 
    
}





// credit Spriteshift (https://spriteshift.itch.io/) 