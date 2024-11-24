// hooks
import useTrack from '../../hooks/useTrack';

// utilities
import Utils from '../../utils/Utils';

const Duration = (): JSX.Element => {
  const { trackDuration, currentProgress } = useTrack();

  return (
    <div className='player-duration flex flex-gap-medium flex-v-center'>
      <span>{Utils.formatTime(currentProgress)}</span>
      <em>/</em>
      <span>{Utils.formatTime(trackDuration)}</span>
    </div>
  );
};

export default Duration;
