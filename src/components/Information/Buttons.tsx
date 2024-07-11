import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// interfaces
interface IProps {
  handlePlayPause: () => void;
}

const Buttons = ({ handlePlayPause }: IProps): React.JSX.Element => {
  const { currentState } = useTrack();

  return (
    <div className='flex flex-gap flex-h-center flex-v-center'>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Add to playlist'
      >
        <span className='material-symbols-outlined'>library_add</span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Share'
      >
        <span className='material-symbols-outlined'>share</span>
      </button>
      <button
        type='button'
        onClick={handlePlayPause}
        className='play-button flex flex-h-center flex-v-center active-opacity'
      >
        <span className='material-symbols-outlined'>
          {currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Download'
      >
        <span className='material-symbols-outlined'>download</span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='More'
      >
        <span className='material-symbols-outlined'>more_vert</span>
      </button>
    </div>
  );
};

export default Buttons;
