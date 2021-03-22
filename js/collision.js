const collisionMap = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
]

const collisionMapRows = 14;
const collisionMapCols = 25;


const collision = {
    1: null,
    2: 'the',
    3: null,
    4: null,
    5: null,
}

// Declaring values for use in checkPosition Function
let currentCol = 0;
let currentRow = 0;
let positionOnMapValue = 0;
let updatedTileSize = tileSize * tileOutputSize;

const checkPosition = (player) => {
    //  Test top left corner
    currentCol = Math.floor(player.position.x / tileSize);
    currentRow = Math.floor(player.position.y / tileSize);
    postionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    
    if(postionOnMapValue != 0) {
        collision[postionOnMapValue];
    }


    //  Test top right corner
    currentCol = Math.floor((player.position.x + player.width) / updatedTileSize);
    currentRow = Math.floor(player.position.y / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue];
    }

    //  Test bottom left corner
    currentCol = Math.floor(player.position.x / updatedTileSize);
    currentRow = Math.floor((player.position.y + player.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    console.log(currentCol, currentRow);
    console.log(newPlayer.position.y);
    if(positionOnMapValue != 0) {
        collision[positionOnMapValue];
    }

    
    //  Test bottom right corner
    currentCol = Math.floor((player.position.x + player.width) / updatedTileSize);
    currentRow = Math.floor((player.position.y + player.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue];
    }

}   

checkPosition(newPlayer);