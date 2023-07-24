

// ======================================== Move left side 
const moveBy = 3; // movement speed
let isMovingUp = false;
let isMovingDown = false;
const leftSqr = document.querySelector('.left-side')



window.addEventListener('DOMContentLoaded', () => {
  leftSqr.style.position = 'absolute';
  leftSqr.style.top = "399.438px";

});
// listens out for keys up/down
window.addEventListener('keydown', (e) => {
  if (e.key === 'w' || e.key === 'W') {
    isMovingUp = true;
  } else if (e.key === 's'|| e.key === 'S') {

    isMovingDown = true;

  }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'W' ) {
        isMovingUp = false;
    } else if (e.key === 's' || e.key === 'S') {                   
        isMovingDown = false;
    }

});





//==== position=========
function updatePosition() {
  let locations = leftSqr.getBoundingClientRect()




  // ==== disables up buttons
  if(locations.y===140){
    if (!isMovingUp) {
      leftSqr.style.top = parseFloat(leftSqr.style.top) - moveBy + 'px';
    }
  }

  
  if(locations.y>140){
    if (isMovingUp) {
      leftSqr.style.top = parseFloat(leftSqr.style.top) - moveBy + 'px';
    }
  }


  // ======== adds boundrys to up button
  else{
    leftSqr.style.top = parseFloat(leftSqr.style.top) + moveBy + 13 + 'px';
  }


    // ==== disables down buttons
  if(locations.y === 630){
     if (!isMovingDown) {
      leftSqr.style.top = parseFloat(leftSqr.style.top) + moveBy + 'px';
    }
    if (isMovingDown){
      leftSqr.style.top = parseFloat(leftSqr.style.top) - 40 + 'px'
    }
  }
  if(locations.y <= 630){
    if (isMovingDown) {
     leftSqr.style.top = parseFloat(leftSqr.style.top) + moveBy + 'px';
   }
 }



 // ==== adds boundrys to down button=======
 else{
  leftSqr.style.top = parseFloat(leftSqr.style.top) - moveBy  + 'px';
}


  // console.log(locations.y) may need for later 
  requestAnimationFrame(updatePosition);
}
updatePosition();
// ============================= end of movement logic














export {leftSqr}
