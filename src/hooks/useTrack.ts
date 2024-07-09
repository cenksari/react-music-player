import React from 'react';

import TrackContext from '../contexts/TrackContext';

import type { ITrackContext } from '../types/types';

const useTrack = () => {
  const { currentState, currentTrack, currentAlbum, addItem, removeItem, changeState } =
    React.useContext(TrackContext) as ITrackContext;

  return { currentState, currentTrack, currentAlbum, addItem, removeItem, changeState };
};

export default useTrack;
