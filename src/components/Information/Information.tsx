import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// components
import Image from './Image';
import Details from './Details';
import Buttons from './Buttons';
import Playlist from './Playlist';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
  tracks: ITrack[];
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Information = ({ album, tracks, handlePlayPause }: IProps): React.JSX.Element => {
  const { currentTrack } = useTrack();

  return (
    <div className='information flex flex-column flex-gap no-select'>
      <Image album={album} />

      <Details album={album} />

      <Buttons handlePlayPause={() => handlePlayPause(currentTrack || tracks[0], album)} />

      <Playlist album={album} tracks={tracks} handlePlayPause={handlePlayPause} />
    </div>
  );
};

export default Information;
