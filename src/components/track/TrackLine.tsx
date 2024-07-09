import React from 'react';

import type { ITrack } from '../../types/types';

interface IProps {
  item: ITrack;
  playing?: boolean;
  selected?: boolean;
}

const TrackLine = ({ item, playing = false, selected = false }: IProps): React.JSX.Element => (
  <div
    className={
      selected
        ? 'active track flex flex-gap flex-v-center flex-space-between active-opacity'
        : 'track flex flex-gap flex-v-center flex-space-between active-opacity'
    }
  >
    {selected && (
      <button type='button'>
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
      <button type='button'>
        <span className='number flex flex-h-center flex-v-center track-number'>{item.no}</span>
        <span className='control flex flex-h-center flex-v-center track-number material-symbols-outlined'>
          play_arrow
        </span>
      </button>
    )}

    <div className='flex flex-column flex-grow'>
      <button type='button' className='name-button'>
        {item.name}
      </button>
      <em>{item.playcount} Plays</em>
    </div>
    <span>{item.duration}</span>
  </div>
);

export default TrackLine;
