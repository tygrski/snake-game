let inputDirtection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      inputDirtection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      inputDirtection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      inputDirtection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      inputDirtection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  return inputDirtection;
}
