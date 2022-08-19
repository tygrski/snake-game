import { getInputDirection } from "./input.js";

// set speed how fast game updates
export const SNAKE_SPEED = 1;

const snakeBody = [
    {x: 10, y: 11},
    
]

// takes postition of segment and makes the rest of the snake to follow
//snakeBody.length - 2, to get the last element of the snake
export function update(){
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