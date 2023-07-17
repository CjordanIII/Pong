const leftSqr = document.querySelector('.left-side')

console.log(leftSqr)



 class PongBallAndPattles{
    constructor(postionBall,ballhit,leftBallHit,leftPos){
        //pong ball prob to inheret
        this.postionBall = postionBall
        this.ballhit = ballhit
        // left ball inheret
        this.leftBallHit = leftBallHit //Should be an array
        this.leftPos = leftPos // assortment of values

    }
    
    // add methods herfe
}
export const mainClass = new PongBallAndPattles()
const arrPongBallAndPattles = []

export {PongBallAndPattles}
