import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// types
import type { ITrack, IAlbum } from '../../types/types';

// interfaces
interface IProps {
  prev?: ITrack | null;
  next?: ITrack | null;
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Control = ({ prev, next, handlePlayPause }: IProps): React.JSX.Element => {
  const { currentState, currentTrack, currentAlbum } = useTrack();

  return (
    <>
      <button
        type='button'
        title={`Previous song: ${prev?.name}`}
        className={prev ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => handlePlayPause(prev as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>skip_previous</span>
      </button>
      <button
        type='button'
        className='big active-opacity'
        onClick={() => handlePlayPause(currentTrack as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>
          {currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button
        type='button'
        title={`Next song: ${next?.name}`}
        className={next ? 'active-opacity' : 'disabled active-opacity'}
        onClick={() => handlePlayPause(next as ITrack, currentAlbum as IAlbum)}
      >
        <span className='material-symbols-outlined'>skip_next</span>
      </button>
    </>
  );
};

export default Control;
