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
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

const colors = document.querySelectorAll('.palette-color')
const brush = document.querySelector('.current-brush')
const canvas = document.querySelectorAll('.square')



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

colors.forEach(function (element) {
  element.addEventListener('click', function () {
    updateBrush(element.classList[1])
  })
})

canvas.forEach(element =>
  element.addEventListener('click', () => {
    element.classList.replace(element.classList[1], currentColor)
  })
)

/**************************
 * WIRING IT ALL TOGETHER *
**************************/

let currentColor = brush.classList[1]

function updateBrush(newColor) {
  brush.classList.replace(currentColor, newColor)
  currentColor = newColor
}
