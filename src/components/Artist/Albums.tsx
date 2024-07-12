import React from 'react';

import { Link } from 'react-router-dom';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  albums: IAlbum[];
}

const Albums = ({ albums }: IProps): React.JSX.Element => {
  return (
    <div className='container flex flex-column flex-gap'>
      <Link to='/' className='active-opacity underline'>
        <h3>Albums</h3>
      </Link>

      <div className='flex flex-gap'>
        {albums.map((item: IAlbum) => (
          <Link key={item.id} to={`/album/${item.id}`} className='active-opacity'>
            <div className='card'>
              <div className='card-image' style={{ backgroundImage: `url(${item.image})` }} />
              <div className='card-info flex flex-column flex-gap-small'>
                <strong>{item.name}</strong>
                <div className='flex flex-gap-medium flex-h-center flex-v-center'>
                  {item.explicit && (
                    <span className='material-symbols-outlined' title='Explicit'>
                      explicit
                    </span>
                  )}
                  <span>
                    {item.year} - {item.songs} songs
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
