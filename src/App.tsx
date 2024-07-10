import React from 'react';

import useTrack from './hooks/useTrack';

import type { ITrack, IAlbum } from './types/types';

import Cover from './components/Cover/Cover';
import Player from './components/Player/Player';
import Information from './components/Information/Information';

import trackData from './data/trackData.json';
import albumData from './data/albumData.json';

import './styles/player.css';

const App = (): React.JSX.Element => {
  const { currentState, currentTrack, addItem } = useTrack();

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handlePlayPause = (track: ITrack, album: IAlbum): void => {
    if (currentState === 'playing') {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    if (currentTrack?.id !== track.id) {
      addItem(track, album);
      audioRef.current?.play();
    }
  };

  return (
    <Cover image={albumData.image}>
      <Player audioRef={audioRef} tracks={trackData} handlePlayPause={handlePlayPause} />
      <Information album={albumData} tracks={trackData} handlePlayPause={handlePlayPause} />
    </Cover>
  );
};

export default App;
