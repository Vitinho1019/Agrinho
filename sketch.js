//ChatGPT
let player;
let fruits = [];
let score = 0;
let gameTime = 30; // segundos
let startTime;
let gameOver = false;

function setup() {
  createCanvas(600, 400);
  player = new Player();
  spawnFruits(10);
  startTime = millis();
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(100, 180, 100);

  if (!gameOver) {
    let elapsed = (millis() - startTime) / 1000;
    let timeLeft = max(0, gameTime - elapsed);

    // Desenha e atualiza frutas
    for (let i = fruits.length - 1; i >= 0; i--) {
      fruits[i].display();
      if (player.collects(fruits[i])) {
        fruits.splice(i, 1);
        score++;
        spawnFruit();
      }
    }

    // Atualiza e desenha jogador
    player.move();
    player.display();

    // Mostra pontuação e tempo
    fill(255);
    text(`Pontuação: ${score}`, width - 100, 30);
    text(`Tempo: ${timeLeft.toFixed(1)}s`, 100, 30);

    if (timeLeft <= 0) {
      gameOver = true;
    }
  } else {
    fill(255, 0, 0);
    textSize(36);
    text("Fim de jogo!", width / 2, height / 2 - 30);
    textSize(28);
    text(`Sua pontuação: ${score}`, width / 2, height / 2 + 20);
    textSize(20);
    text("Pressione R para jogar novamente", width / 2, height / 2 + 60);
  }
}

function keyPressed() {
  if (gameOver && (key === 'r' || key === 'R')) {
    restartGame();
  }
}

function spawnFruits(n) {
  for (let i = 0; i < n; i++) {
    fruits.push(new Fruit());
  }
}

function spawnFruit() {
  fruits.push(new Fruit());
}

function restartGame() {
  score = 0;
  fruits = [];
  spawnFruits(10);
  player.reset();
  startTime = millis();
  gameOver = false;
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 40;
    this.speed = 5;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, this.size / 2, height - this.size / 2);
  }

  display() {
    fill(200, 100, 50);
    ellipse(this.x, this.y, this.size, this.size);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("🌾", this.x, this.y);
  }

  collects(fruit) {
    let d = dist(this.x, this.y, fruit.x, fruit.y);
    return d < (this.size / 2 + fruit.size / 2);
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
  }
}

class Fruit {
  constructor() {
    this.size = 30;
    this.x = random(this.size / 2, width - this.size / 2);
    this.y = random(this.size / 2, height - this.size / 2);
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("🍎", this.x, this.y);
  }
}
