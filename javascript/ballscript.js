import{leftSqr as leftSqr} from './leftPattle.js'

const ball =  document.querySelector('.ball')
const main = document.querySelector('#mainPlayerOne')


let leftright = Math.floor(Math.random()*2)
let right = leftright?true:false


let updown = Math.floor(Math.random()*2)
let up = leftright?true:false
//! may reuse move files in to tools folder
function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    };
    if (typeof step=='undefined'){
        step = 1;
    };
    var result = [];
    for (let i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    };
    return result;
};

let velocity = 1.8

// updates milisecs where the ball is
setInterval(() => {
    //gives ball tracking including velocity
    let ballbounds = ball.getBoundingClientRect()
    let boardbouncds = main.getBoundingClientRect()
    let paddleboundry = leftSqr.getBoundingClientRect()
    let ballbounceleft = parseInt(ballbounds.left)
    let ballbouncesright = parseInt(ballbounds.right)
    let ballbouncestop= parseInt(ballbounds.top)
    let ballbouncesbottom= parseInt(ballbounds.bottom)
    let balltop = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('top')))
    let ballleft =Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('left')))

    // if(range(ballbounds.x,paddleboundry.y)){
    //     console.log(range(ballbounds.x,paddleboundry.y))
    //! do not forget to run again  }
    // else{
        
    // }

    
// check where the ball is 
    if(right && up){
        ball.style.top = balltop-velocity + 'px'
        ball.style.left = ballleft+velocity +1+ 'px'
    }
    if(!right && up){
        ball.style.top = balltop-velocity + 'px'
        ball.style.left = ballleft-velocity + 'px'
    }
    if(right && !up){
        ball.style.top = balltop+velocity + 'px'
        ball.style.left = ballleft+velocity + 'px'
    }
    if(!right && !up){
        ball.style.top = balltop+velocity + 'px'
        ball.style.left = ballleft-velocity + 'px'
    }
    // gives pysics of the ball
    if(ballbouncestop<=boardbouncds.top){
        leftright = Math.floor(Math.random()*2)
        right = leftright?true:false
        up = false

    }
    if(ballbouncesbottom>=boardbouncds.bottom){
        leftright = Math.floor(Math.random()*2)
        right = leftright?true:false
        up = true

    }
    // left and right boundrys
    if(ballbouncesright>=boardbouncds.right){
        right = false
        updown = Math.floor(Math.random()*2)
        up = leftright?true:false
        console.log('ball')

    }

    if(range(ballbounds.x,paddleboundry.y)[0]){
        console.log(range(ballbounds.x,paddleboundry.y))
        if(ballbounceleft<paddleboundry.y){ // left boundery 
            right = true
            updown = Math.floor(Math.random()*2)
            up = leftright?true:false
            // console.log('where the paddle is==>',paddleboundry.y)
            // console.log('where the ball is==>',ballbounds.y)
            
    
        }
    }

}, 1);



//TODO make the ball react to the pattle keep random fix the barriers and make 
//TODO make the  goal and make the outlines for the border