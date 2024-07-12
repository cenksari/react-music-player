import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// components
import TrackLine from './TrackLine';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Playlist = ({ album, handlePlayPause }: IProps): React.JSX.Element => {
  const { currentState, currentTrack } = useTrack();

  return (
    <div className='playlist'>
      {album.tracks.map((item: ITrack) => (
        <TrackLine
          track={item}
          key={item.id}
          selected={currentTrack?.id === item.id}
          handlePlayPause={() => handlePlayPause(item, album)}
          playing={currentTrack?.id === item.id && currentState === 'playing'}
        />
      ))}
    </div>
  );
};

export default Playlist;
