import React from 'react';

interface IProps {
  muted: boolean;
  volume: number;
  onMutePressed: () => void;
  onVolumeChange: (volume: number) => void;
}

const Volume = ({ muted, volume, onMutePressed, onVolumeChange }: IProps): React.JSX.Element => {
  return (
    <div className='flex flex-gap flex-v-center flex-h-end'>
      <input
        min={0}
        max={1}
        step={0.05}
        type='range'
        value={volume}
        disabled={muted}
        aria-label='volume'
        onChange={(e) => onVolumeChange(Number(e.target.value))}
      />
      <button type='button' className='active-opacity' onClick={onMutePressed}>
        <span className='material-symbols-outlined'>{muted ? 'volume_off' : 'volume_up'}</span>
      </button>
    </div>
  );
};

export default Volume;
