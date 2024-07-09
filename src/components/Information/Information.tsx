import React from 'react';

import TrackLine from '../Track/TrackLine';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  album: IAlbum;
  tracks: ITrack[];
}

const Information = ({ album, tracks }: IProps): React.JSX.Element => (
  <div className='information flex flex-column flex-gap'>
    <div className='image'>
      <div className='image-inner'>
        <div className='front'>
          <img width='400' src={album.image} alt={album.name} draggable='false' />
        </div>
        <div
          className='back flex flex-h-center flex-v-center'
          style={{ backgroundImage: `url('${album.bandimage}')` }}
        />
      </div>
    </div>

    <div className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
      <a href='/' className='active-opacity'>
        <h3>{album.artist}</h3>
      </a>
      <a href='/' className='active-opacity'>
        <span>{album.name}</span>
      </a>
      <span className='album-info'>
        {album.songs} Songs - {album.minutes} Minutes
      </span>
    </div>

    <div className='flex flex-h-center'>
      <button type='button' className='play-button flex flex-h-center flex-v-center active-opacity'>
        <span className='material-symbols-outlined'>play_arrow</span>
      </button>
    </div>

    <div className='playlist scroller-vertical'>
      {tracks.map((item: ITrack) => (
        <TrackLine key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default Information;