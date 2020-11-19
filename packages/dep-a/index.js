/**
 * Returns a random emoji.
 */
module.exports = () => {
  return ["🎨", "💰", "🎩", "🎒", "🧿"][Math.floor(Math.random() * 5)];
};
