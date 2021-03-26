let transitionAtlas = new Image();
transitionAtlas.src = './images/transitionScreen.png';
transitionAtlas.onload = draw; // Uncomment this for background map

tileSize = 32;
tileOutputSize = 3; // 1X can set it higher to make tiles bigger and more spaced


let gameMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 10, 169, 170, 171, 89, 90, 91, 12, 13, 14, 18, 19, 17, 62, 178, 179, 177, 97, 98, 99, 17, 18, 19, 34, 35, 33, 78, 194, 195, 193, 113, 114, 115, 33, 34, 35, 25, 26, 27, 29, 161, 183, 161, 81, 103, 81, 25, 26, 27, 41, 39, 43, 45, 161, 199, 161, 81, 119, 81, 41, 42, 43, 46, 47, 48, 79, 46, 47, 48, 46, 47, 48, 46, 47, 48
    
]

let atlasCol = 16;
let atlasRow = 16;


let mapRows = 7;
let mapCols = 13;
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
                backgroundctx.drawImage(transitionAtlas, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
            }

            mapIndex ++;
        }
    } 
    
}





// credit Spriteshift (https://spriteshift.itch.io/) 