import React from 'react';

import { Link } from 'react-router-dom';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Details = ({ album }: IProps): React.JSX.Element => (
  <div className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
    <Link to='/' className='active-opacity'>
      <h3>{album.artist}</h3>
    </Link>
    <Link to='/' className='active-opacity'>
      <span>{album.name}</span>
    </Link>
    <span className='album-info'>
      {album.songs} Songs - {album.minutes} Minutes
    </span>
  </div>
);

export default Details;
