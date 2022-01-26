$(document).ready(function(){
    $('.toast').toast('show'); 
 });
 


const positions = document.querySelector('.positions');
const start = document.querySelector('#start');
const marks = document.querySelectorAll('input[type=radio]');
const picker = document.querySelector('.choice');
const dispHead = document.querySelector('.display');

start.addEventListener('click', startGame);

function getMark() {
  let val;
  marks.forEach(function(r){
    if (r.checked) {
      val = r.value;
    }
  })
  return val;
}
console.log(getMark())
let mark;
let grid = []

function startGame() {
  // picker.classList.add('active');
  console.log('hello');
  grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  createBoard();
  mark = getMark();
  dispHead.textContent = 'game on'
}

function createBoard() {
  positions.innerHTML = '';
  let i = 0;
  while (i < 9){
    //console.log('hellow!');
    let pos = positions.appendChild(document.createElement("div"));
    pos.className = `position${i}`;
    pos.addEventListener('click', doNothing);
    i++
    start.textContent = 'Reset'
  }
}


// let mark = getMark();

function doNothing(e) {
  if (this.textContent == '') {
    let num = parseInt(this.className[8]);
    grid[num] = mark;
    console.log(grid);
    console.log(num)
    this.textContent = mark;
    if (winCheck(mark)) {
      dispHead.textContent = `${mark} wins!!\nThe game resets in 3 seconds`
      setTimeout(startGame, 3000)
      return
    }
    if (mark == 'x') {
      mark = 'o';
    }
    else{
      mark = 'x';
    }
  }
  else {}

  if(fullCheck()) {
    // dispHead.textContent = 'game on'
    dispHead.textContent = 'Draw\nThe game resets in 10 seconds';
    setTimeout(startGame, 10000)
  }
}


function fullCheck() {
  let val;
  let counter = 0;
  grid.forEach(function(elm) {
    if(elm != ' ') {
      counter++;
    }
    else{
    }
  })
  if (counter == grid.length) {
    val = true;
  }
  else {
    val = false;
  }
  return val;
}

function winCheck(mark) {
  let winVal;
  if((grid[0] == mark && grid[1] == mark && grid[2] == mark) || (grid[3] == mark && grid[4] == mark && grid[5] == mark) || (grid[6] == mark && grid[7] == mark && grid[8] == mark) ||
  (grid[0] == mark && grid[3] == mark && grid[6] == mark) || (grid[1] == mark && grid[4] == mark && grid[7] == mark) || (grid[2] == mark && grid[5] == mark && grid[8] == mark) ||
  (grid[0] == mark && grid[4] == mark && grid[8] == mark) || (grid[2] == mark && grid[4] == mark && grid[6] == mark)) {
    winVal = true;
  }
  else {
    winVal = false;
  }
  return winVal;
}
