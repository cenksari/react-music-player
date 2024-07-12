import React from 'react';

// interfaces
interface IProps {
  muted: boolean;
  volume: number;
  onMutePressed: () => void;
  onVolumeChange: (volume: number) => void;
}

const Volume = ({ muted, volume, onMutePressed, onVolumeChange }: IProps): React.JSX.Element => (
  <div className='volume-control flex flex-gap flex-v-center flex-h-end'>
    <input
      min={0}
      max={1}
      step={0.05}
      type='range'
      value={volume}
      disabled={muted}
      className='white'
      aria-label='volume'
      onChange={(e) => onVolumeChange(Number(e.target.value))}
    />
    <button
      type='button'
      onClick={onMutePressed}
      className='active-opacity'
      title={muted ? 'Unmute' : 'Mute'}
    >
      <span className='material-symbols-outlined'>{muted ? 'volume_off' : 'volume_up'}</span>
    </button>
  </div>
);

export default Volume;
