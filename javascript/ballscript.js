import{leftSqr as leftSqr,} from './leftPattle.js'
import { rightSqr as rightSqr } from './rightballOneplayer.js'


const ball =  document.querySelector('.ball')
const main = document.querySelector('#mainPlayerOne')


let leftright = Math.floor(Math.random()*2)
let right = leftright?true:false


let updown = Math.floor(Math.random()*2)
let up = leftright?true:false
//! may reuse move files in to tools folder

let velocity = 5

// updates milisecs where the ball is
setInterval(() => {
    //gives ball tracking including velocity
    let ballbounds = ball.getBoundingClientRect()
    let boardbouncds = main.getBoundingClientRect()
    let paddleboundry = leftSqr.getBoundingClientRect()
    let paddleboundry2 = rightSqr.getBoundingClientRect()
    let ballbounceleft = parseInt(ballbounds.left)
    let ballbouncesright = parseInt(ballbounds.right)
    let ballbouncestop= parseInt(ballbounds.top)
    let ballbouncesbottom= parseInt(ballbounds.bottom)
    let balltop = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('top')))
    let ballleft =Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('left')))

    
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






        let div2 = paddleboundry
        let div1 = ballbounds
        let div3 = paddleboundry2
        //==Left==
        function touching(d1,d2){
            let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width+120 : d1.width);// with hitbox
            let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height-55 : d1.height+40); //higtbox
            return ox && oy;
        }
        //==Right==
        function touching2(d1,d2){
            let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width+120 : d1.width);// with hitbox
            let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height-55 : d1.height+40); //higtbox
            return ox && oy;
        }


        
        let t = touching(div1,div2) //boolLeft
        let v =touching2(div1,div3)


        if(v){
            if(ballbouncesright>=boardbouncds.right){
                right = false
                updown = Math.floor(Math.random()*2)
                up = leftright?true:false
        
            }
        
        }


        if(t){
            if(ballbounceleft<=boardbouncds.left){
                right = true
                updown = Math.floor(Math.random()*2)
                up = leftright?true:false
            }
    
        }

}, 1);




//TODO make the  goal and make the outlines for the border