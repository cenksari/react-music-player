/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  track: ITrack;
  album: IAlbum;
}

const Player = ({ track, album }: IProps): React.JSX.Element => (
  <div className='player'>
    <div className='progress'>
      <div className='progress-bar' />
    </div>

    <div className='player-container flex flex-gap flex-v-center flex-space-between'>
      <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
        <button type='button' className='active-opacity'>
          <span className='material-symbols-outlined'>skip_previous</span>
        </button>
        <button type='button' className='big active-opacity'>
          <span className='material-symbols-outlined'>play_arrow</span>
        </button>
        <button type='button' className='active-opacity'>
          <span className='material-symbols-outlined'>skip_next</span>
        </button>

        <div className='player-duration flex flex-gap-medium flex-v-center'>
          <span>0:00</span>
          <em>/</em>
          <span>{track.duration}</span>
        </div>
      </div>

      <div className='player-information flex flex-gap flex-grow flex-h-center flex-v-center'>
        <a href='/' className='active-opacity'>
          <img width='50' src={album.image} alt={album.name} draggable='false' />
        </a>
        <div className='track-info flex flex-column'>
          <strong>{track.name}</strong>
          <span className='flex flex-gap-small'>
            <a href='/' className='active-opacity'>
              {album.artist}
            </a>
            &bull;
            <a href='/' className='active-opacity'>
              {album.name}
            </a>
          </span>
        </div>
      </div>

      <div className='player-controls flex flex-gap flex-h-end flex-v-center flex-1'>
        <button type='button' className='active-opacity'>
          <span className='material-symbols-outlined'>volume_up</span>
        </button>
        <button type='button' className='active-opacity'>
          <span className='material-symbols-outlined'>keyboard_arrow_up</span>
        </button>
      </div>
    </div>
  </div>
);

export default Player;
