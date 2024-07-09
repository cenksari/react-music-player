import React from 'react';

import Volume from './Volume';
import Expand from './Expand';
import Control from './Control';
import Details from './Details';
import Progress from './Progress';
import Duration from './Duration';

import type { IAlbum, ITrack } from '../../types/types';

interface IProps {
  track?: ITrack | null;
  album?: IAlbum | null;
}

const Player = ({ track, album }: IProps): React.JSX.Element | null => {
  if (track && album) {
    return (
      <div className='player'>
        <Progress current={0} duration={0} />

        <div className='player-container flex flex-gap flex-v-center flex-space-between'>
          <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
            <Control />

            <Duration current='0:00' duration={track?.duration} />
          </div>

          <Details album={album} track={track} />

          <div className='player-controls flex flex-gap flex-h-end flex-v-center flex-1'>
            <Volume />
            <Expand />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Player;
