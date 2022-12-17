const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const gameOverEl = document.querySelector(".game-over");
const playAgainBtn = document.querySelector(".play-again");

// select cvs
const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");

// размеры поля
const width = cvs.width,
  height = cvs.height;
let gameLoop;

// перезагружаю при клике на  'Snake Speed' для получения нового значения
let speedQ = document.querySelector(".speed").addEventListener("click", () => {
  location.reload();
});
function getRndIntenger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRndIntenger();

const speed = getRndIntenger(7, 17);
document.querySelector(".speed-number").innerHTML = speed;

var FPS = 1000 / speed;

//размеры ячейки квадрата
const squareSize = 20;
let gameStarted = false;

// game colors
let boardColor = "#000",
  headColor = "red",
  bodyColor = "green";

// direction
let currentDirection = "";
let directionsQueue = [];
const directions = {
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
};

// draw board
function drawBoard() {
  ctx.fillStyle = boardColor;
  ctx.fillRect(0, 0, width, height);
}

// draw square
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);

  ctx.strokeStyle = boardColor;
  ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

// //рисуем змею 'drawSnake()', и помещаем ее в определенные поля 'snake'
let snake = [
  { x: 5, y: 5 }, // Head
  { x: 4, y: 5 }, // Body
  { x: 3, y: 5 }, // Tail
];
function drawSnake() {
  snake.forEach((square, index) => {
    //проверяем на head и задаем color 'i[0] - head' 'i[1-2] - tail'
    const color = index === 0 ? headColor : bodyColor;
    drawSquare(square.x, square.y, color);
  });
}

function moveSnake() {
  if (!gameStarted) return;

  // get head position
  const head = { ...snake[0] };

  // consume the directions
  if (directionsQueue.length) {
    currentDirection = directionsQueue.shift();
  }

  // change head postion
  switch (currentDirection) {
    case directions.RIGHT:
      head.x += 1;
      break;
    case directions.LEFT:
      head.x -= 1;
      break;
    case directions.UP:
      head.y -= 1;
      break;
    case directions.DOWN:
      head.y += 1;
      break;
  }

  //увеличиваем если food have been eaten
  if (hasEatenFood()) {
    food = createFood();
  } else {
    // remove tail
    snake.pop();
  }

  // unshift new head
  snake.unshift(head);
}
function hasEatenFood() {
  const head = snake[0];
  return head.x === food.x && head.y === food.y;
}

// keyup event lisenter
document.addEventListener("keyup", setDirection);
function setDirection(event) {
  const newDirection = event.key;
  const oldDirection = currentDirection;

  //условия движения
  if (
    (newDirection === directions.LEFT && oldDirection !== directions.RIGHT) ||
    (newDirection === directions.RIGHT && oldDirection !== directions.LEFT) ||
    (newDirection === directions.UP && oldDirection !== directions.DOWN) ||
    (newDirection === directions.DOWN && oldDirection !== directions.UP)
  ) {
    if (!gameStarted) {
      gameStarted = true;
      gameLoop = setInterval(frame, FPS);
    }
    directionsQueue.push(newDirection);
  }
}

// узнаем количество квадратов по горизонтали/вертикали
const horizontalSq = width / squareSize; // 400/20 => 20
const verticalSq = height / squareSize; // 400/20 => 20

// food
let food = createFood(); // { x : 5, y : 6 }
function createFood() {
  let food = {
    x: Math.floor(Math.random() * horizontalSq),
    y: Math.floor(Math.random() * verticalSq),
  };

  //проверяем отрисовку положения еды
  while (snake.some((square) => square.x === food.x && square.y === food.y)) {
    food = {
      x: Math.floor(Math.random() * horizontalSq),
      y: Math.floor(Math.random() * verticalSq),
    };
  }
  return food;
}
function drawFood() {
  drawSquare(food.x, food.y, "#F95700");
}

// score
const initialSnakeLength = snake.length; // 3
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
function renderScore() {
  score = snake.length - initialSnakeLength;
  scoreEl.innerHTML = `&#x1f525; ${score}`;
  highScoreEl.innerHTML = `&#x1f3c6; ${highScore}`;
}

// hit wall (закаканчиваем игру в случае выхода за игровое поле)
function hitWall() {
  const head = snake[0];

  return (
    head.x < 0 || head.x >= horizontalSq || head.y < 0 || head.y >= verticalSq
  );
}

// (Don`t eat yourself) DEY - не ешь себя сам
function hitSelf() {
  const snakeBody = [...snake];
  const head = snakeBody.shift();

  //проходимся по snakeBody и если получаем true заканчиваем игру
  return snakeBody.some((square) => square.x === head.x && square.y === head.y);
}

// game over
function gameOver() {
  // select score and high score el
  const scoreEl = document.querySelector(".game-over-score .current");
  const highScoreEl = document.querySelector(".game-over-score .high");
  const bodyImg = document.querySelector("body");

  // calculate the high score
  highScore = Math.max(score, highScore);
  localStorage.setItem("high-score", highScore);

  // update the score and high score el
  scoreEl.innerHTML = `&#x1f4aa; ${score}`;
  highScoreEl.innerHTML = `&#x1f3c6; ${highScore}`;

  // show game over el
  gameOverEl.classList.remove("hide");

  bodyImg.classList.add("game-over_img");
}

// loop
function frame() {
  drawBoard();
  drawFood();
  moveSnake();
  drawSnake();
  renderScore();
  if (hitWall() || hitSelf()) {
    clearInterval(gameLoop);
    gameOver();
  }
}
frame();

// restart the game
playAgainBtn.addEventListener("click", restartGame);
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    restartGame();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == "32") {
    restartGame();
  }
});
function restartGame() {
  const bodyImg = document.querySelector("body");

  // настраиваем рандомную позицию змейки при рестарте
  let rndPos = Math.floor(Math.random() * 20) + 1;
  snake = [
    { x: rndPos, y: rndPos }, // Head
    { x: rndPos - 1, y: rndPos }, // Body
    { x: rndPos - 2, y: rndPos }, // Tail
  ];

  // reset directions
  currentDirection = "";
  directionsQueue = [];

  // hide the game over screen
  gameOverEl.classList.add("hide");

  // reset the gameStarted state to false
  gameStarted = false;

  bodyImg.classList.remove("game-over_img");
  // re-draw everything
  frame();
}


//меняем тему оформдения страницы с использованием localStorage
document.querySelector(".themetoggle").addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }
  addDarkClassToBody();
});

function addDarkClassToBody() {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("body").classList.add("dark");
      document.querySelector(".themetoggle span").innerHTML = "&#x1f31e;";
    } else {
      document.querySelector("body").classList.remove("dark");
      document.querySelector(".themetoggle span").innerHTML = "&#x1f311;";
    }
  } catch (err) {}
}
addDarkClassToBody();
