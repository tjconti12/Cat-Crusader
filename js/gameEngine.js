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
    newEnemy.draw(ctx);
    checkPosition(newEnemy);
    newEnemy.move();
    checkColideWithEnemy(newPlayer, newEnemy);
    if (gameEngineDecider) {
        requestAnimationFrame(gameRun);
    };
}
requestAnimationFrame(gameRun); // Uncomment to start game