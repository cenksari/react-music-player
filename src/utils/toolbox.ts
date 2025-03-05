/**
 * Formats a given duration in seconds into a string in the format mm:ss.
 *
 * @param {number} duration - The duration in seconds to be formatted.
 * @returns {string} The formatted time string in mm:ss format.
 */
export const formatTime = (duration: number): string => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  return [min, sec].map((n) => (n < 10 ? `0${n}` : n)).join(':');
};

/**
 * Shuffles an array in place.
 *
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 */
export const shuffleArray = <T>(array: T[]): T[] => array?.sort(() => 0.5 - Math.random());
