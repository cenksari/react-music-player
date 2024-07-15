import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// types
import type { IAlbum, ITrack } from '../../types/types';

const Control = (): React.JSX.Element => {
  const { prevTrack, nextTrack, currentState, currentTrack, currentAlbum, playPause } = useTrack();

  return (
    <>
      <button
        type='button'
        title={`Previous song: ${prevTrack?.name}`}
        className={prevTrack ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => playPause(prevTrack as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>skip_previous</span>
      </button>
      <button
        type='button'
        className='big active-opacity'
        onClick={() => playPause(currentTrack as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>
          {currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button
        type='button'
        title={`Next song: ${nextTrack?.name}`}
        className={nextTrack ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => playPause(nextTrack as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>skip_next</span>
      </button>
    </>
  );
};

export default Control;
