import React from 'react';

// types
import type { IAlbum, ITrack } from '../../types/types';

// interfaces
interface IProps {
  track: ITrack;
  album: IAlbum;
  playing?: boolean;
  selected?: boolean;
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const TrackLine = ({
  track,
  album,
  handlePlayPause,
  playing = false,
  selected = false,
}: IProps): React.JSX.Element => (
  <div
    className={
      selected
        ? 'active track flex flex-gap flex-v-center flex-space-between active-opacity'
        : 'track flex flex-gap flex-v-center flex-space-between active-opacity'
    }
  >
    {selected && (
      <button type='button' onClick={() => handlePlayPause(track, album)}>
        {playing ? (
          <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined'>
            pause
          </span>
        ) : (
          <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined'>
            play_arrow
          </span>
        )}
      </button>
    )}

    {!playing && !selected && (
      <button type='button' onClick={() => handlePlayPause(track, album)}>
        <span className='number flex flex-h-center flex-v-center track-number'>{track.no}</span>
        <span className='control flex flex-h-center flex-v-center track-number material-symbols-outlined'>
          play_arrow
        </span>
      </button>
    )}

    <div className='flex flex-column flex-grow'>
      <button type='button' className='name-button' onClick={() => handlePlayPause(track, album)}>
        {track.name}
      </button>
      <em>{track.playcount} Plays</em>
    </div>
    <span>{track.duration}</span>
  </div>
);

export default TrackLine;
