// hooks
import useTrack from '../../hooks/useTrack';

// components
import TrackLine from './TrackLine';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Playlist: React.FC<IProps> = ({ album }) => {
  const { currentState, currentTrack, handlePlayPause } = useTrack();

  return (
    <section className='playlist'>
      {album.tracks?.map((item: ITrack) => (
        <TrackLine
          track={item}
          key={item.id}
          selected={currentTrack?.id === item.id}
          handlePlayPause={() => handlePlayPause(item, album)}
          playing={currentTrack?.id === item.id && currentState === 'playing'}
        />
      ))}
    </section>
  );
};

export default Playlist;
