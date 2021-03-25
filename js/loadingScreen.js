const loadingScreen = () => {

    
    loadingH2.innerText = `Level ${currentLevel +1}`;
    let loadingScreenAtlas = new Image();
    loadingScreenAtlas.src = './images/transitionScreen.png';
    loadingScreenAtlas.onload = drawLoadingScreen // Uncomment this for background map

    
    tileSize = 32;
    tileOutputSize = 3; // 1X can set it higher to make tiles bigger and more spaced
    updatedTileSize = tileSize * tileOutputSize;

    let loadingScreenMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 14, 10, 169, 170, 171, 89, 90, 91, 12, 13, 14, 18, 19, 17, 0, 178, 179, 177, 97, 98, 99, 17, 18, 19, 34, 35, 33, 0, 194, 195, 193, 113, 114, 115, 33, 34, 35, 25, 26, 27, 29, 161, 183, 161, 81, 103, 81, 25, 26, 27, 41, 39, 43, 45, 161, 199, 161, 81, 119, 81, 41, 42, 43, 46, 47, 48, 79, 46, 47, 48, 46, 47, 48, 46, 47, 48
    ]

    atlasCol = 16;
    atlasRow = 15;


    mapRows = 7;
    mapCols = 13;
    mapHeight = mapRows * tileSize;
    mapWidth = mapCols * tileSize;

    mapIndex = 0;
    sourceX = 0;
    sourceY = 0;

    function drawLoadingScreen() {
        
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                let tileVal = loadingScreenMap[mapIndex];
                if(tileVal != 0) {
                    tileVal -=1;
                    sourceY = Math.floor(tileVal/atlasCol) * tileSize;
                    sourceX = (tileVal % atlasCol) * tileSize;
                    backgroundctx.drawImage(loadingScreenAtlas, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, tileSize * tileOutputSize, tileSize * tileOutputSize);
                
                }

                mapIndex ++;
            }
        } 
        drawForestBackground();
        drawLoadingCat();
    }

    function drawForestBackground() {
        backgroundImg.appendChild(forestBackground);
        
    }
}

// let catRunning = new Image();
// catRunning.src = './images/catspritesheet.gif';
// catRunning.onload = drawCatRunning;

// const collectionOfImgs = [[88, 64 * 2],[88 * 1, 64 * 2],[88 * 2, 64 * 2],[88 * 3, 64 * 2],[88 * 4, 64 * 2],[88 * 5, 64 * 2]]

    runningDelay = 0;
    let letLoadingScreenRun = true;
    runningIndex = 0;
    let movingX = 1150;
    let movingDelay = 0;
    
function drawLoadingCat() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.drawImage(catRunning, collectionOfImgs[runningIndex][0], collectionOfImgs[runningIndex][1], 80, 64, movingX, 35, 80, 64);
    
    if(runningDelay % 15 === 0) {
        runningIndex +=1;
    }
    if(movingDelay % 2 === 0) {
        movingX -= 10;
    }

    if(runningIndex === 5) {
        runningIndex = 0;
    }
    runningDelay +=1;
    movingDelay +=1;
    
    if(movingX > 0) {
        requestAnimationFrame(() => {
            drawLoadingCat();
        });
    } else {
        hideElement(loadingH2);
        gameLevels[currentLevel]();
        ctx.clearRect(0, 0, gameWidth, gameHeight);
        backgroundctx.clearRect(0, 0, gameWidth, gameHeight);
        backgroundImg.removeChild(forestBackground);
        gameEngineDecider = true;
        gameRun();
    }
}


