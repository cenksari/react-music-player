import React from 'react';

import type { ITrackContext } from '../types/types';

const TrackContext = React.createContext<ITrackContext>({
  track: null,
  album: null,
  addItem: () => {},
  removeItem: () => {},
});

export default TrackContext;
