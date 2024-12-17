// types
import type { ITrack } from '../../types/types';

// interfaces
interface IProps {
  track: ITrack;
  playing?: boolean;
  selected?: boolean;
  handlePlayPause: () => void;
}

const TrackLine: React.FC<IProps> = ({
  track,
  handlePlayPause,
  playing = false,
  selected = false,
}) => (
  <div
    className={
      selected
        ? 'active track flex flex-gap flex-v-center flex-space-between active-opacity'
        : 'track flex flex-gap flex-v-center flex-space-between active-opacity'
    }
  >
    {selected && (
      <button type='button' onClick={handlePlayPause}>
        {playing ? (
          <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined'>
            pause
          </span>
        ) : (
          <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined'>
            play_arrow
          </span>
        )}
      </button>
    )}
    {!playing && !selected && (
      <button type='button' onClick={handlePlayPause}>
        <span className='number flex flex-h-center flex-v-center track-number'>{track.no}</span>
        <span className='control flex flex-h-center flex-v-center track-number material-symbols-outlined'>
          play_arrow
        </span>
      </button>
    )}
    <div className='flex flex-column flex-grow'>
      <button type='button' className='name-button' onClick={handlePlayPause}>
        {track.name}
      </button>
      <div className='flex flex-gap-small flex-v-center'>
        {track.explicit && (
          <span className='material-symbols-outlined' title='Explicit'>
            explicit
          </span>
        )}
        <em>{track.playcount} Plays</em>
      </div>
    </div>
    <span>{track.duration}</span>
  </div>
);

export default TrackLine;
