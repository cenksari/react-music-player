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
              <button type='button' className='button black active-opacity'>
                Details
              </button>
              <button type='button' className='button black active-opacity'>
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Image;
