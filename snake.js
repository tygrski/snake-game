import { getInputDirection } from "./input.js";

// set speed how fast game updates
export const SNAKE_SPEED = 5;
//  0 because snake is not growing
let newSegments = 0;

const snakeBody = [
    {x: 10, y: 11},
    
]

// takes postition of segment and makes the rest of the snake to follow
//snakeBody.length - 2, to get the last element of the snake
export function update(){
    addSegments()

    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0 ; i--){
        snakeBody[i + 1] = { ...snakeBody[i]}
    };
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead  && index === 0) return false
       return equalPositions(segment, position) 
    })
}
export function getSnakeHead(){
    // [0] will always be the snake head
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

//  if 2 positinos are true 
//  this will run return equalPositions(segment, position) 
function equalPositions(pos1, pos2){
     return   pos1.x === pos2.x && pos1.y === pos2.y
}

//  takes new segment and adds it to snake
function addSegments(){
 for(let i = 0; i < newSegments; i++){
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
 }

 newSegments = 0
}