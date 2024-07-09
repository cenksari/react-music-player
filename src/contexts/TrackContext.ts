import React from 'react';

import type { ITrackContext } from '../types/types';

const TrackContext = React.createContext<ITrackContext>({
  currentState: null,
  currentTrack: null,
  currentAlbum: null,
  addItem: () => {},
  removeItem: () => {},
  changeState: () => {},
});

export default TrackContext;
