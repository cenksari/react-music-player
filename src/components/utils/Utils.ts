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

const Utils = {
  formatTime,
};

export default Utils;
