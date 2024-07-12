import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  prev?: ITrack | null;
  next?: ITrack | null;
}

const Control = ({ prev, next }: IProps): React.JSX.Element => {
  const { currentState, currentTrack, currentAlbum, playPause } = useTrack();

  return (
    <>
      <button
        type='button'
        title={`Previous song: ${prev?.name}`}
        className={prev ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => playPause(prev as ITrack, currentAlbum as IAlbum)}
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
        title={`Next song: ${next?.name}`}
        className={next ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => playPause(next as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>skip_next</span>
      </button>
    </>
  );
};

export default Control;
