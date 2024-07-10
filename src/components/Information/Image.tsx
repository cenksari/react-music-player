import React from 'react';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Image = ({ album }: IProps): React.JSX.Element => (
  <div className='image'>
    <div className='image-inner'>
      <div className='front'>
        <img src={album.image} alt={album.name} draggable='false' />
      </div>
      <div
        className='back flex flex-h-center flex-v-center'
        style={{ backgroundImage: `url('${album.bandimage}')` }}
      />
    </div>
  </div>
);

export default Image;
