// hooks
import useTrack from '../../hooks/useTrack';

// components
import Volume from './Volume';
import Control from './Control';
import Details from './Details';
import Progress from './Progress';
import Duration from './Duration';
import ControlMini from './ControlMini';

const Player: React.FC = () => {
  const { currentTrack, currentAlbum } = useTrack();

  if (currentTrack && currentAlbum) {
    return (
      <div className='player no-select'>
        <Progress />
        <div className='player-container flex flex-gap flex-v-center flex-space-between'>
          <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
            <Control />
            <Duration />
          </div>
          <Details />
          <div className='player-controls flex flex-gap-medium flex-h-end flex-v-center flex-1'>
            <Volume />
            <ControlMini />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Player;
