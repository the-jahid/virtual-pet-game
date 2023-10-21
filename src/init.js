// Import the game state object and the handleUserAction function
import game, { handleUserAction } from "./gameState";
// Import the initButtons function
import initButtons from "./buttons";
// Import the TICK_RATE constant
import { TICK_RATE } from "./constants";

// Define the init function
async function init() {
  console.log("starting game");
  // Initialize the game control buttons
  initButtons(handleUserAction);

  // Set the next time to tick to the current time
  let nextTimeToTick = Date.now();
  // Define the nextAnimationFrame function
  function nextAnimationFrame() {
    // Get the current time
    const now = Date.now();
    // If it's time to tick, update the game state and set the next time to tick
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    // Request the next animation frame
    requestAnimationFrame(nextAnimationFrame);
  }

  // Start the animation loop
  nextAnimationFrame();
}

// Call the init function
init();


