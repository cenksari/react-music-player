// hooks
import useTrack from '../../hooks/useTrack';

const Progress: React.FC = () => {
  const { trackDuration, currentProgress, handleProgressChange } = useTrack();

  return (
    <div className='progress'>
      <input
        min={0}
        type='range'
        step={0.01}
        name='progress'
        max={trackDuration}
        value={currentProgress}
        className='progress-bar red'
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default Progress;
