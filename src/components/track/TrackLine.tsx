import React from 'react';

import useTrack from '../../hooks/useTrack';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  track: ITrack;
  album: IAlbum;
  playing?: boolean;
  selected?: boolean;
}

const TrackLine = ({
  track,
  album,
  playing = false,
  selected = false,
}: IProps): React.JSX.Element => {
  const { addItem } = useTrack();

  const handleAddTrack = (): void => {
    addItem(track, album);
  };

  return (
    <div
      className={
        selected
          ? 'active track flex flex-gap flex-v-center flex-space-between active-opacity'
          : 'track flex flex-gap flex-v-center flex-space-between active-opacity'
      }
    >
      {selected && (
        <button type='button' onClick={() => handleAddTrack()}>
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
        <button type='button' onClick={() => handleAddTrack()}>
          <span className='number flex flex-h-center flex-v-center track-number'>{track.no}</span>
          <span className='control flex flex-h-center flex-v-center track-number material-symbols-outlined'>
            play_arrow
          </span>
        </button>
      )}

      <div className='flex flex-column flex-grow'>
        <button type='button' className='name-button' onClick={() => handleAddTrack()}>
          {track.name}
        </button>
        <em>{track.playcount} Plays</em>
      </div>
      <span>{track.duration}</span>
    </div>
  );
};

export default TrackLine;
