// Joseph Green
// Golf Budget Calculator

function calculateBudget() {
    // Get user inputs and convert to numbers (use 0 if empty)
    const golfBalls = Number(document.getElementById("golfBalls").value) || 0;
    const gloves = Number(document.getElementById("gloves").value) || 0;
    const golfRounds = Number(document.getElementById("golfRounds").value) || 0;
    const snacks = Number(document.getElementById("snacks").value) || 0;
    const lessons = Number(document.getElementById("lessons").value) || 0;

    // Add everything together
    const total = golfBalls + gloves + golfRounds + snacks + lessons;

    // Show the result
    alert("Your total monthly golf expenses are: $" + total.toFixed(2));
}
