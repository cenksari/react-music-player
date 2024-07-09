import React from 'react';

const Volume = (): React.JSX.Element => {
  const [mute, setMute] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(50);

  const setMuteState = (): void => {
    setMute(!mute);
  };

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className='flex flex-gap flex-v-center flex-h-end'>
      <input
        type='range'
        min={0}
        max={100}
        value={volume}
        onChange={onSliderChange}
        disabled={mute}
      />
      <button type='button' className='active-opacity' onClick={() => setMuteState()}>
        <span className='material-symbols-outlined'>{mute ? 'volume_off' : 'volume_up'}</span>
      </button>
    </div>
  );
};

export default Volume;
