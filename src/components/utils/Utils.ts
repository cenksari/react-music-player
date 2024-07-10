const formatTime = (duration: number): string => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? `0${n}` : n)).join(':'); // format - mm:ss

  return formatted;
};

const Utils = {
  formatTime,
};

export default Utils;
