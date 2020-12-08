const { sample } = require("lodash");

/**
 * Returns a random emoji.
 */
module.exports = () => {
  return sample(["🎨", "💰", "🎩", "🎒", "🧿"]);
};
