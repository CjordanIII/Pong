import{leftSqr as leftSqr,} from './leftPattle.js'
import { rightSqr as rightSqr } from './rightballOneplayer.js'


const ball =  document.querySelector('.ball')
const main = document.querySelector('#mainPlayerOne')


let leftright = Math.floor(Math.random()*2)
let right = leftright?true:false


let updown = Math.floor(Math.random()*2)
let up = leftright?true:false

let score = 0
let velocity = 5
let start = true




// updates milisecs where the ball is
function render(){
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
            // if ball miss
            if(ballbounceleft<=boardbouncds.left - 200){
               setTimeout(()=>{ball.style.left = '800px'},1500)
               score = score + 1 
            }
            if(ballbouncesright>=boardbouncds.right){
                setTimeout(()=>{ball.style.left = '800px'},1500)
                
            }
            
    
    }, 1);
}







// ====keep score  ======

const p1 = document.querySelector("#p1")
let p1S = document.querySelector('.score1')
let p2S = document.querySelector('.score2')
const p2 = document.querySelector("#p2")
const div = document.querySelector('.modle')
const reset = document.querySelector('.reset')
let p1s = 0
let p2s = 0


p1.addEventListener('click',()=>{
    p1s = p1s + 1
    p1S.textContent = "P1: " + p1s
    if(p1s === 10){
        winner('Player one wins')
    }
})



p2.addEventListener('click',()=>{
    p2s = p2s + 1
    p2S.textContent = "P2: " + p2s
    if(p2s === 10){
        winner('Player two wins')
    }
    
})

function winner(text){
    let h1 = document.createElement('h1')
    h1.textContent = text
    h1.setAttribute('class',"winner")
    div.appendChild(h1)
}
const getWinner = document.querySelector('.modle')
reset.addEventListener('click', ()=>{
   getWinner.remove()
   p1S.textContent = "P1: "
   p2S.textContent = "P2: "
})

render()


//TODO make the  goal and make the outlines for the border