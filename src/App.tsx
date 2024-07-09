import React from 'react';

import useTrack from './hooks/useTrack';

import Cover from './components/Cover/Cover';
import Player from './components/Player/Player';
import Information from './components/Information/Information';

import trackData from './data/trackData.json';
import albumData from './data/albumData.json';

import './styles/player.css';

const App = (): React.JSX.Element => {
  const { track, album } = useTrack();

  return (
    <Cover image={albumData.image}>
      <Player track={track} album={album} />
      <Information album={albumData} tracks={trackData} />
    </Cover>
  );
};

export default App;
