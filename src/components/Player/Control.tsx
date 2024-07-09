import React from 'react';

import useTrack from '../../hooks/useTrack';

const Control = (): React.JSX.Element => {
  const { currentState } = useTrack();

  return (
    <>
      <button type='button' className='active-opacity'>
        <span className='material-symbols-outlined'>skip_previous</span>
      </button>
      <button type='button' className='big active-opacity'>
        <span className='material-symbols-outlined'>
          {currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button type='button' className='active-opacity'>
        <span className='material-symbols-outlined'>skip_next</span>
      </button>
    </>
  );
};

export default Control;
