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
      <div className='mini-image' style={{ backgroundImage: `url(${album?.image})` }} />
    </Link>
    <div className='track-info flex flex-column'>
      <div className='flex flex-gap-small flex-v-center'>
        <strong>{track?.name}</strong>
        {track?.explicit && <span className='material-symbols-outlined'>explicit</span>}
      </div>
      <span className='flex flex-gap-small'>
        <Link to={`/artist/${album?.artist.id}`} className='active-opacity'>
          {album?.artist.name}
        </Link>
        &bull;
        <Link to={`/album/${album?.id}`} className='active-opacity'>
          {album?.name}
        </Link>
      </span>
    </div>
  </div>
);

export default Details;
