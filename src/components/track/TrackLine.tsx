import React from 'react';

import type { ITrack } from '../../types/types';

interface IProps {
  item: ITrack;
  playing?: boolean;
  selected?: boolean;
}

const TrackLine = ({ item, playing = false, selected = false }: IProps): React.JSX.Element => {
  return (
    <div
      className={
        selected
          ? 'active track flex flex-gap flex-v-center flex-space-between'
          : 'track flex flex-gap flex-v-center flex-space-between'
      }
    >
      {selected && (
        <button type='button'>
          {playing ? (
            <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined active-opacity'>
              pause
            </span>
          ) : (
            <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined active-opacity'>
              play_arrow
            </span>
          )}
        </button>
      )}

      {!playing && !selected && (
        <button type='button'>
          <span className='number flex flex-h-center flex-v-center track-number'>{item.no}</span>
          <span className='control flex flex-h-center flex-v-center track-number material-symbols-outlined active-opacity'>
            play_arrow
          </span>
        </button>
      )}

      <span className='flex flex-column flex-grow'>
        <a href='/' className='active-opacity'>
          <strong>{item.name}</strong>
        </a>
        <em>{item.playcount} Plays</em>
      </span>
      <span>{item.duration}</span>
    </div>
  );
};

export default TrackLine;
