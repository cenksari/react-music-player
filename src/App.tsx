// components
import Player from './components/Player/Player';

// styles
import './styles/player.css';

// navigation
import Navigation from './navigation/Navigation';

// providers
import TrackProvider from './providers/TrackProvider';

const App = (): JSX.Element => (
  <TrackProvider>
    <Player />
    <Navigation />
  </TrackProvider>
);

export default App;
