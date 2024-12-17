import { Link } from 'react-router-dom';

// hooks
import useTrack from '../../hooks/useTrack';

const Details: React.FC = () => {
  const { currentTrack, currentAlbum } = useTrack();

  if (currentTrack && currentAlbum) {
    return (
      <div className='player-information flex flex-gap flex-grow flex-h-center flex-v-center'>
        <Link to={`/album/${currentAlbum.id}`} className='active-opacity'>
          <div className='mini-image' style={{ backgroundImage: `url(${currentAlbum.image})` }} />
        </Link>
        <div className='track-info flex flex-column'>
          <div className='flex flex-gap-small flex-v-center'>
            <strong>{currentTrack.name}</strong>
            {currentTrack.explicit && <span className='material-symbols-outlined'>explicit</span>}
          </div>
          <span className='flex flex-gap-small'>
            <Link to={`/artist/${currentAlbum.artist.id}`} className='active-opacity'>
              {currentAlbum.artist.name}
            </Link>
            &bull;
            <Link to={`/album/${currentAlbum.id}`} className='active-opacity'>
              {currentAlbum.name}
            </Link>
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default Details;
