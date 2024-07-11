import React from 'react';

import { Link } from 'react-router-dom';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  track?: ITrack | null;
  album?: IAlbum | null;
}

const Details = ({ track, album }: IProps): React.JSX.Element => (
  <div className='player-information flex flex-gap flex-grow flex-h-center flex-v-center'>
    <Link to='/' className='active-opacity'>
      <img width='50' src={album?.image} alt={album?.name} draggable='false' />
    </Link>
    <div className='track-info flex flex-column'>
      <strong>{track?.name}</strong>
      <span className='flex flex-gap-small'>
        <Link to='/' className='active-opacity'>
          {album?.artist.name}
        </Link>
        &bull;
        <Link to='/' className='active-opacity'>
          {album?.name}
        </Link>
      </span>
    </div>
  </div>
);

export default Details;
