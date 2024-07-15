import React from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

// types
import type { ITrackContext } from '../types/types';

const useTrack = () => {
  const {
    muted,
    volume,
    audioRef,
    prevTrack,
    nextTrack,
    trackDuration,
    currentProgress,
    currentState,
    currentTrack,
    currentAlbum,
    addItem,
    removeItem,
    playPause,
    changeState,
    onProgressChange,
    handleMuteChange,
    handleVolumeChange,
  } = React.useContext(TrackContext) as ITrackContext;

  return {
    muted,
    volume,
    audioRef,
    prevTrack,
    nextTrack,
    trackDuration,
    currentProgress,
    currentState,
    currentTrack,
    currentAlbum,
    addItem,
    playPause,
    removeItem,
    changeState,
    onProgressChange,
    handleMuteChange,
    handleVolumeChange,
  };
};

export default useTrack;
