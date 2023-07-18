import {PongBallAndPattles as PongBallAndPattles, mainClass as mainClass, leftSqr as leftSqr}from './script.js'


let moveBy = 10

window.addEventListener('load',()=>{
        leftSqr.style.position = 'absolute'
        leftSqr.style.left = 246
        leftSqr.style.top = 399.438

})
window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case 'a':
            leftSqr.style.left = parseInt(leftSqr.style.left) - moveBy + 'px'
            break
        case 'd':
            leftSqr.style.left = parseInt(leftSqr.style.left) + moveBy + 'px'
            break
        case 'w':
            leftSqr.style.top = parseInt(leftSqr.style.top) - moveBy + 'px'
            break
        case 's':
            leftSqr.style.top = parseInt(leftSqr.style.top) + moveBy + 'px'
            break
    }
})

const num = leftSqr.style.left

//  TODO need help moveing rectangle I did the math and this if/swtch cases and red documetnatnion and I dont get how to move it I know the keys are regster.



class LeftPong extends PongBallAndPattles{
    constructor(leftBallHit,leftPos){
        super(leftBallHit,leftPos)
    }
}








const leftpong = new LeftPong()
console.log(mainClass)
console.log(leftpong)
