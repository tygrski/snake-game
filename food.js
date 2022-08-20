import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
// set food object
let food = getRandomFoodPosition()

// makes food dissapperar if snake covers
// snake grows 1 segment if it eats the food
const EXANSION_RATE = 5;

export function update(){
    if(onSnake(food)){
        expandSnake(EXANSION_RATE)
        food = getRandomFoodPosition()
    }
}


export function draw(gameBoard){
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
   
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}