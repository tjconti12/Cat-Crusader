function tutorial () {

    //this.position = {x: gameWidth - this.width - 100, y: gameHeight - this.height - 150};
    newPlayer.position.x = gameWidth - newPlayer.width -80;
    newPlayer.position.y = gameHeight - newPlayer.height -180;


    fishTarget.style.top = '30px';
    fishTarget.style.left = '830px';

    tutorialH2.innerText = `Welcome to the tutorial!`;

    setTimeout(() => {
        tutorialH2.innerText = ''
    }, 3000);

    setTimeout(() => {
        tutorialH2.innerText = 'Moving Character'
        tutorialP.innerHTML = 'Use your keyboard to move the character<br> Click the left arrow to move left! <br> Click the right arrow to move right! <br> Click the space bar to jump!'
    }, 4000);

    setTimeout(() => {
        tutorialH2.innerText = 'Avoiding Danger'
        tutorialP.innerHTML = 'Be sure to avoid the water! <br> Cats hate water! <br> The tutorial includes spikes <br> in place of water'
    }, 12000);

    setTimeout(() => {
        const newEnemy = new Enemy;
        newEnemy.position.x = 200;
        enemyArr.push(newEnemy);
        tutorialH2.innerText = 'Dealing with Enemies'
        tutorialP.innerHTML = 'Oh No! An Enemy Dog Appeared! Be Sure To Not Get Too Close!'
    }, 20000)

    setTimeout(() => {
        showElement(fishTarget);
        tutorialH2.innerText = 'Clearing The Level'
        tutorialP.innerHTML = 'A Fish has appeared! <br> This fish marks the goal! <br> Collect this fish to move on! <br> Once all four fish are collected, you win! <br> Good Luck!'
        
    }, 30000)

    setTimeout(() => {
        tutorialH2.innerText = ''
        tutorialP.innerText = ''
    }, 40000)
    // const newEnemy = new Enemy('num1');
    // newEnemy.position.x = 280;
    // enemyArr.push(newEnemy);
    // newEnemy.setColor('gray');

    let tileAtlas = new Image();
    tileAtlas.src = './images/tileAtlas.png';
    tileAtlas.onload = draw; // Uncomment this for background map

    tileSize = 16;
    tileOutputSize = 2.25; // 1X can set it higher to make tiles bigger and more spaced
    updatedTileSize = tileSize * tileOutputSize;


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
        drawcaveBackground();
    }

    function drawcaveBackground() {
        backgroundImg.appendChild(caveBackground);
    }
    
    // credit Spriteshift (https://spriteshift.itch.io/) 
    
    // Collision info for this map
    
    collisionMapCols = 25;
    collisionMapRows = 14;
    
    collisionMap = [
        5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16,16, 3, 3, 3,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 0, 0, 0,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0,13, 0, 0, 0, 9, 3, 0, 3, 3, 1, 0, 0, 0, 0, 0,
        4, 0, 0, 0, 0, 9, 3,11, 0, 0, 2, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 0, 3, 3, 0, 1, 1, 1, 0, 0, 6, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        4, 0, 0, 3, 3, 0, 0, 2, 0, 4, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        0, 3, 0, 1, 1, 0, 0, 2, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        0, 4, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0,16,16, 3,11, 0, 0, 0, 2,
        0, 4, 3, 3, 3, 3, 3, 5, 0, 5,15,15, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3,
    ];
    console.log('I was here');
}



gameLevels.push(tutorial);

// level1();



