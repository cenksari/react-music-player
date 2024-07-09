import React from 'react';

import TrackContext from '../contexts/TrackContext';

import type { ITrackContext } from '../types/types';

const useTrack = () => {
  const { track, album, addItem, removeItem } = React.useContext(TrackContext) as ITrackContext;

  return { track, album, addItem, removeItem };
};

export default useTrack;
