import { ICONS } from "./constants"; // Importing the ICONS constant from the constants.js file

// Function to toggle the "highlighted" class on an icon element
const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

// Function to initialize the buttons and handle user actions
export default function initButtons(handleUserAction) {
  let selectedIcon = 0; // Initializing the selectedIcon variable to 0

  // Function to handle button clicks
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) { // If the left button is clicked
      toggleHighlighted(selectedIcon, false); // Remove the "highlighted" class from the current icon
      selectedIcon = (2 + selectedIcon) % ICONS.length; // Update the selectedIcon variable to the left icon
      toggleHighlighted(selectedIcon, true); // Add the "highlighted" class to the new icon
    } else if (target.classList.contains("right-btn")) { // If the right button is clicked
      toggleHighlighted(selectedIcon, false); // Remove the "highlighted" class from the current icon
      selectedIcon = (1 + selectedIcon) % ICONS.length; // Update the selectedIcon variable to the right icon
      toggleHighlighted(selectedIcon, true); // Add the "highlighted" class to the new icon
    } else { // If any other button is clicked
      handleUserAction(ICONS[selectedIcon]); // Call the handleUserAction function with the selected icon
    }
  }

  // Add a click event listener to the buttons container
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}