// All the collision logic

// Collision Functions

const hitLeft = (currentCol, character) => {
    let leftSide = currentCol * updatedTileSize;
    if(character.position.x + character.width > leftSide && character.oldPosition.x <= character.position.x) {   // Had to add old position so it wouldnt confuse between left or right
        character.speed.x = 0;
        character.position.x = (currentCol * updatedTileSize) - character.width;
        return true;
    } else {
        return false;
    }
};

const hitBottom = (currentRow, character) => {
    let bottom = currentRow * updatedTileSize + updatedTileSize;
    if(character.position.y < bottom && character.oldPosition.y > character.position.y) {
        character.speed.y = 0;
        character.position.y = currentRow * updatedTileSize + updatedTileSize;
        return true;
    } else {
        return false;
    }
};

const hitRight = (currentCol, character) => {
    let rightSide = (currentCol * updatedTileSize) + updatedTileSize;
    if(character.position.x < rightSide && character.oldPosition.x > character.position.x) {
        character.speed.x = 0;
        character.position.x = (currentCol * updatedTileSize) + updatedTileSize;
        return true;
    } else {
        return false;
    }
};

const hitTop = (currentRow, character) => {
    let top = currentRow * updatedTileSize;
    if((character.position.y + (character.height / 2)) < top) {
        character.speed.y = 0;
        character.position.y = top - character.height;
        
        return true;
    } else {
        return false;
    }
};

const hitSlope = (currentCol, currentRow, character) => {
    // Find the difference between start of block and current x position for player
    let positionX = (character.position.x + character.width) - (currentCol * updatedTileSize);
    // Using y = mx + b to calculate the height of the slope of the square
    let slopeTop = (-0.5 * positionX) + updatedTileSize + (currentRow * updatedTileSize);
    // Verifying that the character is on top of the slope
    //  and updating his position
    if (character.position.y + character.height > slopeTop) {
        character.speed.y = 0;
        character.position.y = slopeTop - character.height;
    }
    // The console.log I used to trouble shoot how to get this to work
    // console.log(positionX, slopeTop, (character.position.y + character.height));
}

const collision = {
    1: function(currentCol, currentRow, character) {
        hitBottom(currentRow, character);
        },
    2: function(currentCol, currentRow, character) { 
        hitLeft(currentCol, character)
        },
    3: function(currentCol, currentRow, character) {
        hitTop(currentRow, character);
        },
    4: function(currentCol, currentRow, character) {
        hitRight(currentCol, character);
        },
    5: function(currentCol, currentRow, character) {
        if (hitBottom(currentRow, character)) {
            return;
        }
        if (hitLeft(currentCol, character)) {
            return;
        }
        if (hitTop(currentRow, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    6: function(currentCol, currentRow, character) {
        if (hitBottom(currentRow, character)) {
            return;
        }
        if (hitLeft(currentCol, character)) {
            return;
        }
        },
    7: function(currentCol, currentRow, character) {
        if (hitTop(currentRow, character)) {
            return;
        }
        if (hitBottom(currentRow, character)) {
            return;
        }
        },
    8: function(currentCol, currentRow, character) {
        if (hitBottom(currentRow, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    9: function(currentCol, currentRow, character) {
        if (hitTop(currentRow, character)) {
            return;
        }
        if (hitLeft(currentCol, character)) {
            return;
        }
        },
    10: function(currentCol, currentRow, character) {
        if (hitLeft(currentCol, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    11: function(currentCol, currentRow, character) {
        if (hitTop(currentRow, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    12: function(currentCol, currentRow, character) {
        if (hitBottom(currentRow, character)) {
            return;
        }
        if (hitLeft(currentCol, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    13: function(currentCol, currentRow, character) {
        if (hitTop(currentRow, character)) {
            return;
        }
        if (hitLeft(currentCol, character)) {
            return;
        }
        if (hitRight(currentCol, character)) {
            return;
        }
        },
    14: win,
    15: function(currentCol, currentRow, character) {
        lose(character);
        },
    16: function(currentCol, currentRow, character) {
        hitSlope(currentCol, currentRow, character);
    },
    17: function(currentCol, currentRow, character) {
        let top = (currentRow * updatedTileSize) + 10;
        if(character.position.y < top && character.oldPosition.y < character.position.y) {
            character.speed.y = 0;
            character.position.y = top - character.height;
        }
    },
    18: function(currentCol, currentRow, character) {
        let top = (currentRow * updatedTileSize) + 10;
        if(character.position.y < top && character.oldPosition.y < character.position.y) {
            character.speed.y = 0;
            character.position.y = top - character.height;
        } else {
            hitLeft(currentCol, character);
        }
    },
    19: function(currentCol, currentRow, character) {
        let top = (currentRow * updatedTileSize) + 10;
        if(character.position.y < top && character.oldPosition.y < character.position.y) {
            character.speed.y = 0;
            character.position.y = top - character.height;
        } else {
            hitRight(currentCol, character);
        }
    }
}

function checkPosition (character) {
    // Declaring values for use in checkPosition Function
    let currentCol = 0;
    let currentRow = 0;
    let positionOnMapValue = 0;
   
    //  Test top left corner
    currentCol = Math.floor(character.position.x / updatedTileSize);
    currentRow = Math.floor(character.position.y / updatedTileSize);
    postionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    
    if(postionOnMapValue != 0) {
        collision[postionOnMapValue](currentCol, currentRow, character);
    }


    //  Test top right corner
    currentCol = Math.floor((character.position.x + character.width) / updatedTileSize);
    currentRow = Math.floor(character.position.y / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow, character);
    }

    //  Test bottom left corner
    currentCol = Math.floor(character.position.x / updatedTileSize);
    currentRow = Math.floor((character.position.y + character.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];
    // console.log(postionOnMapValue);
    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow, character);
    }

    
    //  Test bottom right corner
    currentCol = Math.floor((character.position.x + character.width) / updatedTileSize);
    currentRow = Math.floor((character.position.y + character.height) / updatedTileSize);
    positionOnMapValue = collisionMap[currentRow * collisionMapCols + currentCol];

    if(positionOnMapValue != 0) {
        collision[positionOnMapValue](currentCol, currentRow, character);
    }

}   

const checkColideWithEnemy = (player, enemy) => {
    // Test top left
    let playerTop = player.position.y;
    let playerRight = player.position.x + player.width;
    let playerBottom = player.position.y + player.height;
    let playerLeft = player.position.x

    let enemyTop = enemy.position.y;
    let enemyRight = enemy.position.x + enemy.width;
    let enemyBottom = enemy.position.y + enemy.height;
    let enemyLeft = enemy.position.x;

    if (playerTop > enemyBottom || playerRight < enemyLeft || playerBottom < enemyTop || playerLeft > enemyRight) {
        // console.log('youre good')
    } else {
        lose(player);
    }
};