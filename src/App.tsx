import React from 'react';

// components
import Player from './components/Player/Player';

// styles
import './styles/player.css';

// navigation
import Navigation from './navigation/Navigation';

const App = (): React.JSX.Element => {
  return (
    <>
      <Player />
      <Navigation />
    </>
  );
};

export default App;
