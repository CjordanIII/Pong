



// ======================================== Move left side 
const moveBy = 3; // movement speed
let isMovingUp = false;
let isMovingDown = false;
const rightSqr = document.querySelector('.right-side')





window.addEventListener('DOMContentLoaded', () => {
    rightSqr.style.position = 'absolute';
    rightSqr.style.top = "399.438px";

});
// listens out for keys up/down
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowUp') {
    isMovingUp = true;
  } else if (e.key === 'ArrowDown'|| e.key === 'ArrowDown') {
    isMovingDown = true;
  }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowUp' ) {
        isMovingUp = false;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowDown') {                   
        isMovingDown = false;
    }

});
//==== position=========
function updatePosition() {
  let locations = rightSqr.getBoundingClientRect()




  // ==== disables up buttons
  if(locations.y===140){
    if (!isMovingUp) {
        rightSqr.style.top = parseFloat(rightSqr.style.top) - moveBy + 'px';
    }
  }

  
  if(locations.y>140){
    if (isMovingUp) {
        rightSqr.style.top = parseFloat(rightSqr.style.top) - moveBy + 'px';
    }
  }


  // ======== adds boundrys to up button ============
  else{
    rightSqr.style.top = parseFloat(rightSqr.style.top) + moveBy + 13 + 'px';
  }


    // ==== disables down buttons
  if(locations.y === 630){
     if (!isMovingDown) {
        rightSqr.style.top = parseFloat(rightSqr.style.top) + moveBy + 'px';
    }
    if (isMovingDown){
        rightSqr.style.top = parseFloat(rightSqr.style.top) - 40 + 'px'
    }
  }
  if(locations.y <= 630){
    if (isMovingDown) {
        rightSqr.style.top = parseFloat(rightSqr.style.top) + moveBy + 'px';
   }
 }



 // ==== adds boundrys to down button=======
 else{
    rightSqr.style.top = parseFloat(rightSqr.style.top) - moveBy  + 'px';
}


  // console.log(locations.y) may need for later 
  requestAnimationFrame(updatePosition);
}
updatePosition();
// ============================= end of movement logic














export {rightSqr}
