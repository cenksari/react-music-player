import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

const ControlMini = (): React.JSX.Element | null => {
  const { currentState, currentTrack, currentAlbum, playPause } = useTrack();

  if (currentTrack && currentAlbum) {
    return (
      <button
        type='button'
        className='play-button active-opacity'
        onClick={() => playPause(currentTrack, currentAlbum)}
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
