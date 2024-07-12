/**
 * Formats a given duration in seconds into a string in the format mm:ss.
 *
 * @param {number} duration - The duration in seconds to be formatted.
 * @returns {string} The formatted time string in mm:ss format.
 */
const formatTime = (duration: number): string => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? `0${n}` : n)).join(':');

  return formatted;
};

/**
 * Shuffles an array in place.
 *
 * @param {any[]} array - The array to be shuffled.
 * @returns {any[]} The shuffled array.
 */
const shuffleArray = (array: any[]): any[] => array?.sort(() => 0.5 - Math.random());

const Utils = {
  formatTime,
  shuffleArray,
};

export default Utils;
