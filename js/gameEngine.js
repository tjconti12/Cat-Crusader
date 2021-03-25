let gameEngineDecider = true;

// Need to make a game loop to keep redrawing square

const gameRun = () => {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    newPlayer.draw(ctx);
    friction();
    gravity();
    newPlayer.update();
    checkPosition(newPlayer);
    newPlayer.checkLeftKeyDown();
    newPlayer.checkRightKeyDown();
    enemyArr.forEach((enemy) => {
        enemy.draw(ctx);
        enemy.move();
        checkPosition(enemy);
    
    })
    enemyArr.forEach(enemy => {
        checkColideWithEnemy(newPlayer, enemy);
    })
    // console.log(gameEngineDecider);
    
    if (gameEngineDecider) {
        requestAnimationFrame(() => {
            gameRun()
        });
    };
}
// requestAnimationFrame(() => {
//     gameRun(level1CollisionMap);
// }); // Uncomment to start game


// gameRun(); // FOR TESTINGGGG BE SURE TO UNCOMMENT