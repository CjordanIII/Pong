import {PongBallAndPattles as PongBallAndPattles, mainClass as mainClass}from './script.js'




class LeftPong extends PongBallAndPattles{
    constructor(leftBallHit,leftPos){
        super(leftBallHit,leftPos)
    }
}








const leftpong = new LeftPong()
console.log(mainClass)
console.log(leftpong)
