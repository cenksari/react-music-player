import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

const Progress = (): React.JSX.Element => {
  const { trackDuration, currentProgress, onProgressChange } = useTrack();

  return (
    <div className='progress'>
      <input
        min={0}
        type='range'
        name='progress'
        max={trackDuration}
        value={currentProgress}
        onChange={onProgressChange}
        className='progress-bar red'
      />
    </div>
  );
};

export default Progress;
