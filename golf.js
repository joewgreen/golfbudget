//Golf Budget Calculator
// Joseph Green

/* 
   This script calculates the user's monthly and yearly golf costs
   based on several inputs, then compares that total to a user-set
   budget and displays friendly advice on the page.
*/

// --- DOM ELEMENT REFERENCES (meaningful const variables) ---
const calculateBtn = document.getElementById("calculateBtn"); // button to start calculation
const resultDisplay = document.getElementById("result");      // where we show totals
const adviceDisplay = document.getElementById("advice");      // where we show advice
const dateDisplay = document.getElementById("date");          // where we show today's date

// Show today's date using the built-in Date object
const today = new Date();
dateDisplay.textContent = "Today's date: " + today.toLocaleDateString();

/**
 * Helper function to safely get a number from an input field.
 * If the field is empty or invalid, it returns 0 instead of NaN.
 */
function getNumberFromInput(id) {
    const value = document.getElementById(id).value;
    // parseFloat converts the string into a number with decimals
    return parseFloat(value) || 0;
}

/**
 * Main function that calculates the monthly and yearly golf budget.
 * This is a custom function that will run when the user clicks the button.
 */
function calculateBudget() {
    // --- INPUTS ---
    let golfBalls = getNumberFromInput("golfBalls");
    let gloves = getNumberFromInput("gloves");
    let golfRounds = getNumberFromInput("golfRounds");
    let snacks = getNumberFromInput("snacks");
    let lessons = getNumberFromInput("lessons");
    let budget = getNumberFromInput("budget");

    // Add all the monthly costs together
    let monthlyTotal = golfBalls + gloves + golfRounds + snacks + lessons;

    // Estimate yearly cost and round it using Math.round (built-in)
    let yearlyEstimate = Math.round(monthlyTotal * 12);


    // If the total is 0 or less OR everything is empty, show a warning.
    if (monthlyTotal <= 0 || isNaN(monthlyTotal)) {
        resultDisplay.textContent = "Please enter at least one monthly cost.";
        resultDisplay.style.color = "#ffeb3b"; // yellow text when something is missing
        adviceDisplay.textContent = "";
        return; // stop the function here
    }

    // Show the main result using toFixed to format the decimals
    resultDisplay.textContent =
        "Your estimated monthly golf cost is $" +
        monthlyTotal.toFixed(2) +
        " (about $" +
        yearlyEstimate.toFixed(2) +
        " per year).";

    // Reset result color for normal display
    resultDisplay.style.color = "#ffffff";

    // If the user entered a budget, compare it to the total
    if (budget > 0 && monthlyTotal > budget) {
        // Over budget: use logical AND (&&) plus comparison
        adviceDisplay.textContent =
            "You're over your golf budget. Consider cutting back on rounds or snacks.";
        adviceDisplay.style.color = "#ffcccc"; // light red
    } else if (budget > 0 && monthlyTotal <= budget) {
        adviceDisplay.textContent =
            "Nice! You're staying within your golf budget.";
        adviceDisplay.style.color = "#c8e6c9"; // light green
    } else {
        // No budget entered
        adviceDisplay.textContent =
            "Tip: add a monthly budget above to see if you're over or under.";
        adviceDisplay.style.color = "#ffffff";
    }
}

// EVENT LISTENER (no inline JS)
// When the button is clicked, run our custom function.
calculateBtn.addEventListener("click", calculateBudget);