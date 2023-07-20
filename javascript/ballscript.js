const ball =  document.querySelector('.ball')
const main = document.querySelector('#mainPlayerOne')
console.log(main)
console.log(ball)
let leftright = Math.floor(Math.random()*2)
let right = leftright?true:false


let updown = Math.floor(Math.random()*2)
let up = leftright?true:false

let velocity = 1.8


let ballMove = setInterval(() => {
    
    let ballbounds = ball.getBoundingClientRect()
    let boardbouncds = main.getBoundingClientRect()
    let ballbounceleft = parseInt(ballbounds.left)
    let ballbouncesright = parseInt(ballbounds.right)
    let ballbouncestop= parseInt(ballbounds.top)
    let ballbouncesbottom= parseInt(ballbounds.bottom)
    let balltop = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('top')))
    let ballleft =Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue('left')))


    if(right && up){
        ball.style.top = balltop-velocity + 'px'
        ball.style.left = ballleft+velocity + 'px'
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
    if(ballbouncesright>=boardbouncds.right){
        right = false
        updown = Math.floor(Math.random()*2)
        up = leftright?true:false
    }
    if(ballbounceleft<=boardbouncds.left){
        right = true
        updown = Math.floor(Math.random()*2)
        up = leftright?true:false
    }

}, 1);



//TODO make the ball react to the pattle keep random fix the barriers and make 
//TODO make the  goal and make the outlines for the border