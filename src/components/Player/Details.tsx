import React from 'react';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  track?: ITrack | null;
  album?: IAlbum | null;
}

const Details = ({ track, album }: IProps): React.JSX.Element => (
  <div className='player-information flex flex-gap flex-grow flex-h-center flex-v-center'>
    <a href='/' className='active-opacity'>
      <img width='50' src={album?.image} alt={album?.name} draggable='false' />
    </a>
    <div className='track-info flex flex-column'>
      <strong>{track?.name}</strong>
      <span className='flex flex-gap-small'>
        <a href='/' className='active-opacity'>
          {album?.artist}
        </a>
        &bull;
        <a href='/' className='active-opacity'>
          {album?.name}
        </a>
      </span>
    </div>
  </div>
);

export default Details;
