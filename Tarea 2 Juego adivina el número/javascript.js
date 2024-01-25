let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    let userGuess = Number(guessField.value);
    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");
  
    if (guessCount === 1) {
      guesses.textContent = "Respuestas Anteriores: ";
    }
    guesses.textContent += userGuess + " ";
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
      lastResult.style.color = "black"; 
      lastResult.style.backgroundColor = "green"; 
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "Fin del Juego!!! La respuesta correcta era: " + randomNumber;
      lastResult.style.color = "black"; 
      lastResult.style.backgroundColor = "yellow"; 
      setGameOver();
    } else {
      lastResult.textContent = "Incorrecto!";
      lastResult.style.color = "black"; 
      lastResult.style.backgroundColor = "red"; 
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "El número es demasiado bajo!";
        lowOrHi.style.backgroundColor = "blue"; 
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "El número es demasiado alto!";
        lowOrHi.style.backgroundColor = "blue";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "¿Iniciar un nuevo juego?";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.classList.remove("correct", "incorrect");
    lastResult.style.backgroundColor = ""; 
  
    lowOrHi.textContent = "";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

guessSubmit.addEventListener("click", checkGuess);

guessField.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });