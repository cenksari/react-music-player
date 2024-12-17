// hooks
import useTrack from '../../hooks/useTrack';

const Volume: React.FC = () => {
  const { muted, volume, handleMuteChange, handleVolumeChange } = useTrack();

  return (
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
        onChange={(e) => handleVolumeChange(Number(e.target.value))}
      />
      <button
        type='button'
        onClick={handleMuteChange}
        className='active-opacity'
        title={muted ? 'Unmute' : 'Mute'}
      >
        <span className='material-symbols-outlined'>{muted ? 'volume_off' : 'volume_up'}</span>
      </button>
    </div>
  );
};

export default Volume;
