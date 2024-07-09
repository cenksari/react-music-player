import React from 'react';

import useTrack from '../../hooks/useTrack';

import Volume from './Volume';
import Expand from './Expand';
import Control from './Control';
import Details from './Details';
import Progress from './Progress';
import Duration from './Duration';

const Player = (): React.JSX.Element | null => {
  const { currentTrack, currentAlbum } = useTrack();

  const audioRef = React.useRef<HTMLAudioElement>(null);

  if (currentTrack && currentAlbum) {
    return (
      <div className='player'>
        <Progress current={0} duration={0} />

        <audio src='' controls ref={audioRef}>
          <track kind='captions' />
        </audio>

        <div className='player-container flex flex-gap flex-v-center flex-space-between'>
          <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
            <Control />

            <Duration current='0:00' duration={currentTrack?.duration} />
          </div>

          <Details track={currentTrack} album={currentAlbum} />

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
