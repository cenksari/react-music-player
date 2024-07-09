import React from 'react';

import Cover from './components/Cover/Cover';
import Player from './components/Player/Player';
import Information from './components/Information/Information';

import trackData from './data/trackData.json';
import albumData from './data/albumData.json';

import './styles/player.css';

const App = (): React.JSX.Element => (
  <Cover image={albumData.image}>
    <Information album={albumData} tracks={trackData} />

    <Player />
  </Cover>
);

export default App;
