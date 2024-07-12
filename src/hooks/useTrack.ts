import React from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

// types
import type { ITrackContext } from '../types/types';

const useTrack = () => {
  const {
    audioRef,
    currentState,
    currentTrack,
    currentAlbum,
    addItem,
    removeItem,
    playPause,
    changeState,
  } = React.useContext(TrackContext) as ITrackContext;

  return {
    audioRef,
    currentState,
    currentTrack,
    currentAlbum,
    addItem,
    playPause,
    removeItem,
    changeState,
  };
};

export default useTrack;
