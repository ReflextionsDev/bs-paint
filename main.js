/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */

const gridWidth = 25;
createCanvas('color-5')

function createCanvas(color) {
  let count = 0;
  while (count <= gridWidth * gridWidth) {
    const canvas = document.querySelector('.canvas');
    const div = document.createElement('div');
    div.className = 'square ' + color;
    canvas.appendChild(div);
    count++;
  }
}

/***********
 * QUERIES *
***********/

const colors = document.querySelectorAll('.palette-color')
const brush = document.querySelector('.current-brush')
const canvas = document.querySelectorAll('.square')
const page = document.querySelector('html')


/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

page.addEventListener('mousedown', () => {
  mouseDown = true
})

page.addEventListener('mouseup', () => {
  mouseDown = false
})

colors.forEach(function (element) {
  element.addEventListener('click', function (event) {
    if (event.shiftKey) {
      setCanvasBG(element.classList[1])
    } else {
      updateBrush(element.classList[1])
    }
  })
})

canvas.forEach(element =>
  element.addEventListener('mousedown', () => {
    element.classList.replace(element.classList[1], currentColor)
  })
)

canvas.forEach(element =>
  element.addEventListener('mouseenter', () => {
    if (mouseDown) {
      element.classList.replace(element.classList[1], currentColor)
    }
  })
)

/**************************
 * WIRING IT ALL TOGETHER *
**************************/

let currentColor = brush.classList[1]
let mouseDown = false

function updateBrush(newColor) {
  brush.classList.replace(currentColor, newColor)
  currentColor = newColor
}

function setCanvasBG(color) {
  canvas.forEach(element => {
    element.classList.replace(element.classList[1], color)
  })
}