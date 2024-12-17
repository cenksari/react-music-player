// hooks
import useTrack from '../../hooks/useTrack';

const ControlMini: React.FC = () => {
  const { currentState, currentTrack, currentAlbum, handlePlayPause } = useTrack();

  if (currentTrack && currentAlbum) {
    return (
      <button
        type='button'
        className='play-button active-opacity'
        onClick={() => handlePlayPause(currentTrack, currentAlbum)}
      >
        <span className='material-symbols-outlined'>
          {currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
    );
  }

  return null;
};

export default ControlMini;
