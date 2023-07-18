const leftSqr = document.querySelector('.left-side')




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
 const mainClass = new PongBallAndPattles()

export {PongBallAndPattles,leftSqr,mainClass}
