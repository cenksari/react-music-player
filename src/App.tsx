import React from 'react';

import Cover from './components/Cover/Cover';
import Player from './components/Player/Player';
import Information from './components/Information/Information';

import data from './data/data.json';
import album from './data/album.json';

import './styles/player.css';

const App = (): React.JSX.Element => {
  return (
    <Cover image={album.image}>
      <Information album={album} tracks={data} />
      <Player track={data[0]} album={album} />
    </Cover>
  );
};

export default App;
