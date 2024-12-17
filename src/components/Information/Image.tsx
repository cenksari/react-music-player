import { useState } from 'react';

import { Link } from 'react-router-dom';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Image: React.FC<IProps> = ({ album }) => {
  const [follow, setFollow] = useState<boolean>(false);

  /**
   * Toggles the follow state for the artist.
   */
  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <section className='image'>
      <div className='image-inner'>
        <div className='front'>
          <img src={album.image} alt={album.name} draggable='false' />
        </div>
        <div
          className='back flex flex-h-center flex-v-end'
          style={{ backgroundImage: `url('${album.artist.image}')` }}
        >
          <div className='back-info'>
            <h3>Slayer</h3>
            <p>{album.artist.description}</p>
            <div className='buttons flex flex-gap-small flex-h-center flex-v-center'>
              <span className='flex flex-1 flex-h-start'>
                {album.artist.monthlyListeners} monthly listeners
              </span>
              <div className='flex flex-1 flex-gap-medium flex-h-end flex-v-center'>
                <Link to={`/artist/${album.artist.id}`} className='button black active-opacity'>
                  Details
                </Link>
                <button
                  type='button'
                  className='button black active-opacity'
                  onClick={() => handleFollow()}
                >
                  {follow ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image;
