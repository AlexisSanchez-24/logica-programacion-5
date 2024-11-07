const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = []; 
let guessedCorrectly = false;

while (!guessedCorrectly) {
    let userInput = prompt("Adivina el número secreto (entre 1 y 100):");
    let userNumber = Number(userInput); 

    if (isNaN(userNumber)) {
        alert("Error: Por favor, ingresa un número válido.");
        continue; 
    }

    attempts.push(userNumber);

    if (userNumber === secretNumber) {
        alert("Felicidades, adivinaste el número secreto!");
        console.log("Lista de intentos antes de adivinar:", attempts);
        guessedCorrectly = true; 
    } else {
        alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}
