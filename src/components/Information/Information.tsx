import React from 'react';

import useTrack from '../../hooks/useTrack';

import TrackLine from '../Track/TrackLine';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  album: IAlbum;
  tracks: ITrack[];
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Information = ({ album, tracks, handlePlayPause }: IProps): React.JSX.Element => {
  const { currentState, currentTrack } = useTrack();

  return (
    <div className='information flex flex-column flex-gap'>
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
        <button
          type='button'
          onClick={() => handlePlayPause(currentTrack || tracks[0], album)}
          className='play-button flex flex-h-center flex-v-center active-opacity'
        >
          <span className='material-symbols-outlined'>
            {currentState === 'playing' ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      <div className='playlist scroller-vertical'>
        {tracks.map((item: ITrack) => (
          <TrackLine
            key={item.id}
            track={item}
            album={album}
            handlePlayPause={handlePlayPause}
            selected={currentTrack?.id === item.id}
            playing={currentTrack?.id === item.id && currentState === 'playing'}
          />
        ))}
      </div>
    </div>
  );
};

export default Information;
