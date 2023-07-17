let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10
let minMaxRange

function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    if (document.getElementById("inputBox").value > 100) {
        return minMaxRange = document.getElementById("textOutput").innerHTML = "Por favor, insira um número entre 1-100"
    }
    if (attempts < maxGuesses) {
        const userNumber = Number(document.getElementById("inputBox").value)
        userNumbers.push(" " + userNumber)
        document.getElementById("guesses").innerHTML = userNumbers
        if (userNumber > computerNumber) {
            document.getElementById("textOutput").innerHTML = "Sua tentativa foi muito alta"
            document.getElementById("inputBox").value = ""
            attempts++
            document.getElementById("attempts").innerHTML = attempts
        } else if (userNumber < computerNumber) {
            document.getElementById("textOutput").innerHTML = "Sua tentativa foi muito baixa"
            document.getElementById("inputBox").value = ""
            attempts++
            document.getElementById("attempts").innerHTML = attempts
        } else {
            document.getElementById("textOutput").innerHTML = "Parabéns! Você acertou!"
            attempts++
            document.getElementById("attempts").innerHTML = attempts
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
        }
    } else {
        document.getElementById("textOutput").innerHTML = "Você perdeu! O número era: " + computerNumber
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    }
}
