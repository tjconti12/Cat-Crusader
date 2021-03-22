let tileAtlas = new Image();
tileAtlas.src = './images/tileAtlas.png';
tileAtlas.onload = draw;

// let tileSize = 16;
// let tileOutputSize = 3; // 1X can set it higher to make tiles bigger and more spaced


let gameMap = [
    12, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 2, 2, 2, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 17, 18, 18, 18, 18, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 3, 0, 2, 2, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 2, 2, 3, 0, 0, 11, 2, 2, 2, 12, 13, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 31, 32, 0, 21, 22, 23, 0, 0, 21, 22, 22, 22, 22, 23, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 1, 3, 0, 0, 11, 12, 13, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 3, 0, 21, 23, 0, 0, 11, 12, 13, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 13, 0, 0, 0, 0, 0, 11, 12, 13, 0, 0, 0, 0, 0, 0, 0, 7, 8, 2, 3, 0, 0, 0, 12, 12, 12, 2, 2, 2, 2, 2, 12, 12, 13, 56, 56, 1, 2, 2, 2, 2, 17, 12, 12, 12, 2, 2, 2, 12

    
]

let atlasCol = 10;
let atlasRow = 6;


let mapRows = 14;
let mapCols = 25;
let mapHeight = mapRows * tileSize;
let mapWidth = mapCols * tileSize;

let mapIndex = 0;
let sourceX = 0;
let sourceY = 0;

function draw() {
    for (let col = 0; col < mapHeight; col += tileSize) {
        for (let row = 0; row < mapWidth; row += tileSize) {
            let tileVal = gameMap[mapIndex];
            if(tileVal != 0) {
                tileVal -=1;
                sourceY = Math.floor(tileVal/atlasCol) * tileSize;
                sourceX = (tileVal % atlasCol) * tileSize;
                backgroundctx.drawImage(tileAtlas, sourceX, sourceY, 16, 16, row * tileOutputSize, col * tileOutputSize, 16 * tileOutputSize, 16 * tileOutputSize);
            }

            mapIndex ++;
        }
    } 
    
}





// credit Spriteshift (https://spriteshift.itch.io/) 