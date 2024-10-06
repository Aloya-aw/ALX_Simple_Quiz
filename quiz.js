function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelectorAll('input[name="quiz"]:checked')[0].value;
    if (userAnswer == correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }
    else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
