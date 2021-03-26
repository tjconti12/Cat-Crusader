const level7 = () => {

    fishTarget.style.top = '-10px';
    fishTarget.style.left = '820px';
    showElement(fishTarget);

    newPlayer.position.x = 800;
    newPlayer.position.y = 400;
    newPlayer.width = 25;
    newPlayer.height = 25;
    newPlayer.speed.x = 0;

    enemyArr.pop();

    newEnemy2 = new Enemy;
    newEnemy2.position.x = 280;
    newEnemy2.position.y = 390;

    enemyArr.push(newEnemy2);

    
    
    let loadingScreenAtlas = new Image();
    loadingScreenAtlas.src = './images/transitionScreen.png';
    loadingScreenAtlas.onload = drawNeighborhood // Uncomment this for background map

    
    tileSize = 32;
    tileOutputSize = 1.125; // 1X can set it higher to make tiles bigger and more spaced
    updatedTileSize = tileSize * tileOutputSize;

    let neighborhoodMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 170, 171, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90, 91, 180, 182, 181, 2, 17, 3, 12, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 82, 158, 83, 196, 198, 197, 2, 33, 3, 6, 7, 8, 0, 0, 0, 0, 0, 0, 169, 170, 171, 0, 20, 22, 21, 100, 102, 101, 180, 182, 181, 20, 22, 21, 17, 1, 17, 13, 0, 0, 62, 62, 0, 162, 183, 163, 29, 36, 38, 37, 116, 118, 117, 196, 198, 197, 36, 38, 37, 33, 1, 33, 1, 0, 0, 78, 78, 71, 162, 199, 163, 45, 6, 7, 8, 86, 87, 88, 166, 167, 168, 6, 7, 8, 1, 23, 1, 1, 29, 0, 0, 0, 71, 46, 47, 48, 0, 2, 23, 3, 137, 138, 83, 162, 183, 163, 25, 26, 27, 1, 39, 1, 1, 45, 0, 0, 0, 0, 0, 0, 0, 0, 2, 39, 3, 153, 154, 83, 162, 199, 163, 41, 42, 43, 46, 47, 48, 0, 0, 79, 79, 0, 0, 0, 0, 0, 0, 46, 47, 47, 47, 47, 48, 46, 47, 48, 46, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 62, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 78, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79
    ]

    atlasCol = 16;
    atlasRow = 15;


    mapRows = 14;
    mapCols = 25;
    mapHeight = mapRows * tileSize;
    mapWidth = mapCols * tileSize;

    mapIndex = 0;
    sourceX = 0;
    sourceY = 0;

    function drawNeighborhood() {
        
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = neighborhoodMap[mapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    sourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    sourceX = (tileVal % atlasCol) * tileSize;
                    backgroundctx.drawImage(loadingScreenAtlas, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                
                }

                mapIndex ++;
            }
        } 
        drawNeighborhoodBackground();
        
    }

    function drawNeighborhoodBackground() {
        backgroundImg.appendChild(neighborhoodBackground);
        
    }

    collisionMapCols = 25;
    collisionMapRow = 14;

    collisionMap = [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 3, 3,14,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 3, 3, 0, 0, 0, 0, 0, 0,
        3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 4, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 3, 0, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
    ];
}
gameLevels.push(level7);



/*
1: hitBottom
        
2: hitLeft
        
3: hitTop

4: hitRight

5: hitBottom
   hitLeft
   hitTop
   hitRight 
        
6:  hitBottom 
    hitLeft

7:  hitTop
    hitBottom
    
8:  hitBottom
    hitRight
            
9:  hitTop
    hitLeft
            
10: hitLeft
    hitRight
            
11: hitTop
    hitRight

12: hitBottom
    hitLeft
    hitRight

13: hitTop
    hitLeft
    hitRight

14: win,

15: lose,

16: hitSlope

17: halfHitTop

*/