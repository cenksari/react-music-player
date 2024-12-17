import { Link } from 'react-router-dom';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Details: React.FC<IProps> = ({ album }) => (
  <section className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
    <h1>
      <Link to={`/artist/${album?.artist.id}`} className='active-opacity'>
        {album.artist.name}
      </Link>
    </h1>
    <h2>{album.name}</h2>
    <div className='album-info flex flex-gap-small flex-v-center'>
      {album.explicit && (
        <span className='material-symbols-outlined' title='Explicit'>
          explicit
        </span>
      )}
      <em>
        {album.year} - {album.songs} Songs - {album.minutes} Minutes
      </em>
    </div>
  </section>
);

export default Details;
