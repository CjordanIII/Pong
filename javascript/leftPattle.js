import {PongBallAndPattles as PongBallAndPattles, mainClass as mainClass, leftSqr as leftSqr}from './script.js'

// ======================================== Move left side 
const moveBy = 1;
let isMovingUp = false;
let isMovingDown = false;
let bound = false

window.addEventListener('DOMContentLoaded', () => {
  leftSqr.style.position = 'absolute';
  leftSqr.style.top = "399.438px";
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'w') {
    updatePosition()
    isMovingUp = true;
  } else if (e.key === 's') {
    updatePosition()
    isMovingDown = true;
  }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'w') {
        updatePosition()
        isMovingUp = false;
    } else if (e.key === 's') {
        isMovingDown = false;
        updatePosition()
    }

});

function updatePosition() {
  if (isMovingUp) {
    leftSqr.style.top = parseInt(leftSqr.style.top) - moveBy + 'px';
    if(parseInt(leftSqr.style.top)>= parseInt('140px') ){
        console.log(leftSqr.style.top)
    }
    
  } 
  else if (isMovingDown) {
    leftSqr.style.top = parseInt(leftSqr.style.top) + moveBy + 'px';
  }
  requestAnimationFrame(updatePosition);
}
updatePosition();
// ============================= end of movement logic



//  TODO need help moveing rectangle I did the math and this if/swtch cases and red documetnatnion and I dont get how to move it I know the keys are regster.


// ================class for boolean values====================
class LeftPong extends PongBallAndPattles{
    constructor(leftBallHit,leftPos){
        super(leftBallHit,leftPos)
    }
}








const leftpong = new LeftPong()
console.log(mainClass)
console.log(leftpong)
