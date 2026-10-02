// ==============================================
// PHASE 1: INITIAL SETUP & VARIABLES
// ==============================================

// 1. Initialize our core game state variables
let score = 0; // Our player's total score starts at zero.
const MOD_STARTING_POWER = 1; // How much the clicker button adds initially.


// ==============================================
// PHASE 2: GETTING REFERENCES TO HTML ELEMENTS
// ==============================================

// We need to grab the actual elements from the page so we can change them later.
const scoreDisplayElement = document.getElementById('current-score');
const clickButton = document.getElementById('clicker-button');


// ==============================================
// PHASE 3: THE CORE LOGIC FUNCTION (THE CLICKER)
// ==============================================

function handleButtonClick() {
    // A. Increase the score variable by our starting power
    score += MOD_STARTING_POWER;

    // B. Update the visible number on the screen (DOM Manipulation)
    scoreDisplayElement.textContent = score; 
}


// ==============================================
// PHASE 4: ATTACHING THE LISTENER (MAKING IT WORK!)
// ==============================================

// This line tells the browser: "Listen for a 'click' event on this button, and when it happens, run the handleButtonClick function."
clickButton.addEventListener('click', handleButtonClick);


// Optional: Display a greeting to confirm the script loaded
console.log("Game Script Loaded! Click your button!");

