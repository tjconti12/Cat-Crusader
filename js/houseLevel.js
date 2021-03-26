const level1 = () => {

    fishTarget.style.top = '430px';
    fishTarget.style.left = '770px';
    showElement(fishTarget);

    enemyArr = [];

    // Player Position and sizing
    newPlayer.position.x = 100;
    newPlayer.position.y = 20;
    newPlayer.width = 25;
    newPlayer.height = 25;
    newPlayer.speed.x = 0;
    newPlayer.speed.y = 0;


    levelPlayerSizeX = 40;
    levelPlayerSizeY = 32;
    levelPlayerYoffset = 5;


    // Enemy Position and sizing
    enemyArr = [];

    levelEnemySizeX = 40;
    levelEnemySizeY = 32;
    levelEnemyYoffset = 5;

    newEnemy1 = new Enemy;
    newEnemy1.position.x = 300;
    newEnemy1.position.y = 390;

    enemyArr.push(newEnemy1);
    // enemyArr[0].position.x = 415;
    // enemyArr[0].position.y = 320;

    // newEnemy2 = new Enemy('num2');
    // newEnemy2.setColor('gray');
    // newEnemy2.position.x = 480;
    // newEnemy2.position.y = 200;
    // // newEnemy2.moveDirectionStart = -2;
    // enemyArr.push(newEnemy2);

    let houseAtlas = new Image();
    houseAtlas.src = './images/house_inside.png';
    houseAtlas.onload = drawHouse; // Uncomment this for background map

    

    tileSize = 32;
    tileOutputSize = 1.125; // 1X can set it higher to make tiles bigger and more spaced
    updatedTileSize = tileSize * tileOutputSize;

    let houseMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 47, 0, 0, 0, 80, 80, 0, 130, 0, 0, 0, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    atlasCol = 16;
    atlasRow = 13;


    mapRows = 14;
    mapCols = 25;
    mapHeight = mapRows * tileSize;
    mapWidth = mapCols * tileSize;

    mapIndex = 0;
    sourceX = 0;
    sourceY = 0;

    function drawHouse() {
        
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = houseMap[mapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    sourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    sourceX = (tileVal % atlasCol) * tileSize;
                    backgroundctx.drawImage(houseAtlas, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                
                }

                mapIndex ++;
            }
        } 
        drawHouseSecondary();
    }

    // Second Layer

    // shipAtlas.onload = drawSecondary; // Uncomment this for background map

    // tileSize = 16;
    // tileOutputSize = 1; // 1X can set it higher to make tiles bigger and more spaced


    let houseMapSecondary = [
        0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 60, 60, 0, 0, 0, 0, 28, 28, 0, 47, 120, 158, 0, 47, 0, 158, 0, 47, 0, 158, 0, 47, 0, 97, 98, 76, 76, 0, 0, 55, 71, 44, 44, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 114, 92, 92, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 11, 12, 0, 0, 0, 83, 84, 0, 0, 62, 62, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 27, 28, 0, 124, 47, 99, 100, 47, 0, 79, 78, 79, 0, 47, 158, 0, 47, 0, 120, 0, 10, 61, 0, 0, 92, 43, 44, 0, 87, 0, 115, 116, 0, 0, 94, 95, 95, 0, 0, 0, 0, 0, 0, 136, 0, 22, 22, 0, 0, 9, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 9, 9, 9, 161, 9, 47, 9, 0, 47, 0, 0, 47, 0, 204, 0, 0, 0, 90, 85, 86, 91, 0, 96, 0, 0, 22, 22, 22, 178, 22, 22, 22, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 90, 117, 118, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 159, 87, 160, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0

    ]





    let secondMapIndex = 0;
    let secondSourceX = 0;
    let secondSourceY = 0;

    function drawHouseSecondary() {
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = houseMapSecondary[secondMapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    secondSourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    secondSourceX = (tileVal % atlasCol) * tileSize;
                    secondaryBackgroundctx.drawImage(houseAtlas, secondSourceX + 1, secondSourceY + 1, tileSize - 2, tileSize - 2, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                }

                secondMapIndex ++;
            }
        } 
        drawHouseThird();
    }



    // Third Layer




    let houseMapThird = [

        33, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 7, 33, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7, 33, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 148, 148, 132, 132, 132, 132, 7, 33, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 7, 33, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7, 33, 132, 148, 148, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 7, 33, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 7, 33, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 164, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7, 33, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 7
    ]





    let thirdMapIndex = 0;
    let thirdSourceX = 0;
    let thirdSourceY = 0;

    function drawHouseThird() {
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = houseMapThird[thirdMapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    thirdSourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    thirdSourceX = (tileVal % atlasCol) * tileSize;
                    thirdBackgroundctx.drawImage(houseAtlas, thirdSourceX + 1, thirdSourceY + 1, tileSize - 2, tileSize - 2, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                }

                thirdMapIndex ++;
            }
        } 
        
    }







    collisionMapCols = 25;
    collisionMapRow = 14;

    collisionMap = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17, 0, 0,17,17,17,17, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4,17, 0, 0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14, 2,
        4,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
    ];

}

gameLevels.push(level1);

