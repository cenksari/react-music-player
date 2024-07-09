import React from 'react';

const Volume = (): React.JSX.Element => {
  const [volume, setVolume] = React.useState<number>(50);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className='flex flex-gap flex-v-center'>
      <input type='range' min={0} max={100} value={volume} onChange={onSliderChange} />
      <button type='button' className='active-opacity'>
        <span className='material-symbols-outlined'>volume_up</span>
      </button>
    </div>
  );
};

export default Volume;
