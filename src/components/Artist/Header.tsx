import { useState } from 'react';

// components
import Search from '../Search/Search';

// types
import { IArtist } from '../../types/types';

// interfaces
interface IProps {
  artist: IArtist;
}

const Header: React.FC<IProps> = ({ artist }) => {
  const [follow, setFollow] = useState<boolean>(false);

  /**
   * Toggles the follow state for the artist.
   */
  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <section
      style={{ backgroundImage: `url(${artist.image})` }}
      className='artist-cover flex flex-column flex-h-end'
    >
      <div className='artist-gradient'>
        <Search />
        <div className='container'>
          <h1 className='text-shadow'>{artist.name}</h1>
          <p className='text-shadow'>{artist.description}</p>
          <div className='buttons flex flex-gap-small flex-h-center flex-v-center'>
            <span className='flex flex-1 flex-h-start text-shadow'>
              {artist.monthlyListeners} monthly listeners
            </span>
            <div className='flex flex-1 flex-gap-medium flex-h-end flex-v-center'>
              <button type='button' className='button black active-opacity'>
                Radio
              </button>
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
    </section>
  );
};

export default Header;
