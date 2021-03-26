let catRunning = new Image();
catRunning.src = './images/catspritesheet.gif';
catRunning.onload = drawCatRunning;

const collectionOfImgs = [[88 * 0, 64 * 2],[88 * 1, 64 * 2],[88 * 2, 64 * 2],[88 * 3, 64 * 2],[88 * 4, 64 * 2],[88 * 5, 64 * 2]]

let runningDelay = 0;
let letIntroRun = true;
let runningIndex = 0;
function drawCatRunning() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.drawImage(catRunning, collectionOfImgs[runningIndex][0], collectionOfImgs[runningIndex][1], 86, 64, 400, 300, 160, 120);
    
    if(runningDelay % 10 === 0) {
        runningIndex +=1;
    }

    if(runningIndex === 5) {
        runningIndex = 0;
    }
    runningDelay +=1;
    
    
    if(letIntroRun) {
        requestAnimationFrame(() => {
            drawCatRunning();
        });
    } else {
        ctx.clearRect(0, 0, gameWidth, gameHeight);
    }
}



