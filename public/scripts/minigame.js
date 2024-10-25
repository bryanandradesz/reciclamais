
let score = 0;
let timer = 20;
let fallingTrashInterval;
let countdownInterval;

function allowDrop(event) {
event.preventDefault();
}

function drag(event) {
event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
event.preventDefault();
let trashId = event.dataTransfer.getData("text");
let trashElement = document.getElementById(trashId);
let binId = event.target.id;

// Verifica se o lixo foi colocado na lixeira correta
if (
(trashId.includes("paper") && binId === "bin-paper") ||
(trashId.includes("plastic") && binId === "bin-plastic") ||
(trashId.includes("glass") && binId === "bin-glass") ||
(trashId.includes("metal") && binId === "bin-metal")
) {
score += 10;
trashElement.remove(); // Remove o item de lixo
document.getElementById("score").innerText = "Pontuação: " + score;
} else {
alert("Lixeira errada! Tente novamente.");
}
}

function createTrash() {
const gameArea = document.getElementById("game-area");
const trashTypes = [
{ type: "paper", emoji: "🧻", name: "Papel Higienico" },
{ type: "paper", emoji: "📜", name: "Documento"  },
{ type: "paper", emoji: "📝", name: "Papel de Anotações"  },
{ type: "plastic", emoji: "🥤", name: "Copo de Refri"  },
{ type: "plastic", emoji: "🛍️", name: "Sacolas"  },
{ type: "plastic", emoji: "🪣", name: "Balde"  },
{ type: "glass", emoji: "🍾", name: "Garrafa de Champanhe"  },
{ type: "glass", emoji: "🍸", name: "Copo de Drinks"  },
{ type: "glass", emoji: "🪞", name: "Espelho"  },
{ type: "metal", emoji: "🗑️", name: "Lixeira"  },
{ type: "metal", emoji: "🛡️", name: "Escudo"  },
{ type: "metal", emoji: "🥫", name: "Enlatado de Tomate"  }
];

const randomTrash = trashTypes[Math.floor(Math.random() * trashTypes.length)];

const trashElement = document.createElement("div");
trashElement.classList.add("trash");
trashElement.id = randomTrash.type + '-' + Date.now(); // ID único
trashElement.draggable = true;
trashElement.ondragstart = drag;
trashElement.innerText = randomTrash.emoji + " " + randomTrash.name;

// Posiciona o lixo no topo e em uma posição aleatória horizontal
trashElement.style.left = Math.random() * 80 + "%";
trashElement.style.top = "0px";

gameArea.appendChild(trashElement);

// Faz o lixo "cair"
let position = 0;
const fallingSpeed = 2; // Velocidade da queda
const fallInterval = setInterval(function() {
if (position < 400) {
    position += fallingSpeed;
    trashElement.style.top = position + "px";
} else {
    trashElement.remove(); // Remove o lixo quando ele chega ao fundo
    clearInterval(fallInterval);
}
}, 20);
}

function startFallingTrash() {
fallingTrashInterval = setInterval(createTrash, 1000); // Cria um novo lixo a cada segundo
}

function stopFallingTrash() {
clearInterval(fallingTrashInterval);
}

function startTimer() {
countdownInterval = setInterval(function() {
timer--;
document.getElementById("timer").innerText = "Tempo: " + timer + "s";
if (timer === 0) {
    clearInterval(countdownInterval);
    stopFallingTrash();
    checkResult();
}
}, 1000);
}

function checkResult() {
if (score >= 100) {
document.getElementById("result-message").innerText = "Parabéns! Você é um Reciclador!";
} else {
document.getElementById("result-message").innerHTML = 
` <i class="fa fa-exclamation-circle" aria-hidden="true" style="color:black"></i> Você não conseguiu reciclar a tempo!`;
}
document.getElementById("result").style.display = "block";
}

function resetGame() {
document.getElementById("game-area").innerHTML = ""; // Limpa os lixos
document.getElementById("result").style.display = "none";
score = 0;
timer = 30;
document.getElementById("score").innerText = "Pontuação: " + score;
document.getElementById("timer").innerText = "Tempo: " + timer + "s";
}

function startGame() {
resetGame();
startFallingTrash();
startTimer();
}

// Inicia o jogo
startGame();
