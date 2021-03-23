// Controls

document.addEventListener('keydown', (event) => {
    // How I determined the value of each keyboard key
    // console.log(event.keyCode)
    // // Left arrow: 37
    // // Right arrow: 39
    // // Up arrow: 38
    // // Space Bar 32
    if(event.keyCode === 37) {
        // console.log('You pushed the left arrow!');
        newPlayer.leftKeyDown = true;
        
    } else if (event.keyCode === 39) {
        // console.log('You pushed the right arrow!');
        newPlayer.rightKeyDown = true;
        
    } else if (event.keyCode === 32) {
        // console.log('You pushed the space bar');
        newPlayer.jump();
    }
})

document.addEventListener('keyup', (event) => {
    if(event.keyCode === 37) {
        newPlayer.leftKeyDown = false;
    } else if (event.keyCode === 39) {
        newPlayer.rightKeyDown = false;
    }
})
