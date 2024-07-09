import React from 'react';

import TrackLine from '../Track/TrackLine';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  album: IAlbum;
  tracks: ITrack[];
}

const Information = ({ album, tracks }: IProps): React.JSX.Element => (
  <div className='information flex flex-column flex-gap'>
    <img width='400' src={album.image} alt={album.name} draggable='false' />

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

    <div className='playlist scroller-vertical'>
      {tracks.map((item: ITrack) => (
        <TrackLine key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default Information;
