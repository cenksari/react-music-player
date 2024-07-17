import React from 'react';

import { Link } from 'react-router-dom';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Details = ({ album }: IProps): React.JSX.Element => (
  <section className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
    <Link to={`/artist/${album?.artist.id}`} className='active-opacity'>
      <h3>{album.artist.name}</h3>
    </Link>
    <span>{album.name}</span>
    <span className='album-info flex flex-gap-small flex-v-center'>
      {album.explicit && (
        <span className='material-symbols-outlined' title='Explicit'>
          explicit
        </span>
      )}
      <em>
        {album.year} - {album.songs} Songs - {album.minutes} Minutes
      </em>
    </span>
  </section>
);

export default Details;
