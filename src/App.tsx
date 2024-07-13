import React from 'react';

// components
import Player from './components/Player/Player';

// styles
import './styles/player.css';

// navigation
import Navigation from './navigation/Navigation';

// providers
import TrackProvider from './providers/TrackProvider';

const App = (): React.JSX.Element => {
  return (
    <TrackProvider>
      <Player />
      <Navigation />
    </TrackProvider>
  );
};

export default App;
