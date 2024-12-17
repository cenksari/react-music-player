import { Link } from 'react-router-dom';

// hooks
import useTrack from '../../hooks/useTrack';

// types
import { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
  track: ITrack;
  playing: boolean;
}

const Song: React.FC<IProps> = ({ album, track, playing }) => {
  const { handlePlayPause } = useTrack();

  return (
    <Link
      to={`/album/${album.id}`}
      onClick={(e) => {
        e.preventDefault();

        handlePlayPause(track, album);
      }}
      className='song flex flex-gap flex-v-center active-opacity'
    >
      <div
        className='image'
        style={{
          backgroundImage: `url(${album.image})`,
        }}
      />
      <div className='flex flex-1 flex-gap-small flex-v-center name'>
        <div className='flex flex-1 flex-gap-small flex-v-center'>
          <strong>{track.name}</strong>
          {track.explicit && <span className='material-symbols-outlined'>explicit</span>}
        </div>
        <div className='flex flex-2 flex-gap-small flex-v-center'>
          <div className='artist-name flex flex-1'>
            <span>{album.artist.name}</span>
          </div>
          <div className='play-count flex flex-1'>
            <span>{track.playcount} plays</span>
          </div>
          <div className='album-name flex flex-2 flex-h-end'>
            <span>{album.name}</span>
          </div>
        </div>
      </div>
      <div className='song-actions flex flex-h-center'>
        <div className='song-arrow flex flex-h-center flex-v-center'>
          <span className='material-symbols-outlined'>{playing ? 'pause' : 'play_arrow'}</span>
        </div>
      </div>
    </Link>
  );
};

export default Song;
