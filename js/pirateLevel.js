const level2 = () => {

    let shipAtlas = new Image();
    shipAtlas.src = './images/pirates.v1.png';
    shipAtlas.onload = drawPirate; // Uncomment this for background map

    tileSize = 16;
    tileOutputSize = 3; // 1X can set it higher to make tiles bigger and more spaced


    let pirateMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 198, 199, 200, 201, 202, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 215, 216, 217, 0, 148, 149, 150, 0, 152, 153, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 231, 232, 233, 234, 0, 165, 166, 167, 0, 169, 170, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 41, 42, 115, 113, 146, 115, 115, 115, 188, 146, 189, 0, 188, 146, 189, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 163, 203, 204, 146, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 162, 132, 133, 134, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 0, 0, 0, 0, 0, 0, 219, 220, 221, 222, 0, 0, 0, 162, 162, 0, 0, 0, 0, 0, 147, 0, 0, 162, 163, 0, 0, 0, 0, 0, 0, 235, 236, 237, 238, 0, 0, 0, 162, 162, 162, 0, 0, 0, 0, 147, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 254, 255, 0, 0, 161, 162, 162, 162, 162, 162, 162, 162, 162, 162, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    atlasCol = 16;
    atlasRow = 16;


    mapRows = 14;
    mapCols = 25;
    mapHeight = mapRows * tileSize;
    mapWidth = mapCols * tileSize;

    mapIndex = 0;
    sourceX = 0;
    sourceY = 0;

    function drawPirate() {
        
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = pirateMap[mapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    sourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    sourceX = (tileVal % atlasCol) * tileSize;
                    backgroundctx.drawImage(shipAtlas, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                
                }

                mapIndex ++;
            }
        } 
        drawPirateSecondary();
    }

    // Second Layer

    // shipAtlas.onload = drawSecondary; // Uncomment this for background map

    // tileSize = 16;
    // tileOutputSize = 1; // 1X can set it higher to make tiles bigger and more spaced


    let pirateMapSecondary = [
        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 103, 12, 12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175

    ]





    let secondMapIndex = 0;
    let secondSourceX = 0;
    let secondSourceY = 0;

    function drawPirateSecondary() {
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = pirateMapSecondary[secondMapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    secondSourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    secondSourceX = (tileVal % atlasCol) * tileSize;
                    secondaryBackgroundctx.drawImage(shipAtlas, secondSourceX + 1, secondSourceY + 1, tileSize - 2, tileSize - 2, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                }

                secondMapIndex ++;
            }
        } 
    
    }


}


