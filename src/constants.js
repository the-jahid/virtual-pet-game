// Exporting constants for the game
export const ICONS = ["fish", "poop", "weather"]; // Array of icon names
export const SCENES = ["day", "rain"]; // Array of scene names
export const TICK_RATE = 3000; // The tick rate of the game (in milliseconds)
export const RAIN_CHANCE = 0.2; // The chance of rain (as a decimal)
export const DAY_LENGTH = 60; // The length of a day (in seconds)
export const NIGHT_LENGTH = 5; // The length of a night (in seconds)

// Functions to get the next hunger, die, and poop times
export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock; // Returns a random time for the next hunger event
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 3 + clock; // Returns a random time for the next die event
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock; // Returns a random time for the next poop event










