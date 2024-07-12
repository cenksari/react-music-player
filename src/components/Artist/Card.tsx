import React from 'react';

import { Link } from 'react-router-dom';

// types
import { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Card = ({ album }: IProps): React.JSX.Element => {
  return (
    <Link key={album.id} to={`/album/${album.id}`} className='active-opacity'>
      <div className='card'>
        <div className='card-image' style={{ backgroundImage: `url(${album.image})` }} />
        <div className='card-info flex flex-column flex-gap-small'>
          <strong>{album.name}</strong>
          <div className='flex flex-gap-medium flex-h-center flex-v-center'>
            {album.explicit && (
              <span className='material-symbols-outlined' title='Explicit'>
                explicit
              </span>
            )}
            <span>
              {album.year} - {album.songs} songs
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
