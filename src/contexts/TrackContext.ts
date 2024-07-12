import React from 'react';

// types
import type { ITrackContext } from '../types/types';

const TrackContext = React.createContext<ITrackContext>({
  audioRef: null,
  currentState: null,
  currentTrack: null,
  currentAlbum: null,
  addItem: () => {},
  playPause: () => {},
  removeItem: () => {},
  changeState: () => {},
});

export default TrackContext;
