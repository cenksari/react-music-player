import { use } from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

// types
import type { ITrackContext } from '../types/types';

const useTrack = (): ITrackContext => {
  const {
    muted,
    volume,
    audioRef,
    prevTrack,
    nextTrack,
    currentState,
    currentTrack,
    currentAlbum,
    trackDuration,
    currentProgress,
    addItem,
    changeState,
    handlePlayPause,
    handleMuteChange,
    handleVolumeChange,
    handleProgressChange,
  } = use(TrackContext);

  return {
    muted,
    volume,
    audioRef,
    prevTrack,
    nextTrack,
    currentState,
    currentTrack,
    currentAlbum,
    trackDuration,
    currentProgress,
    addItem,
    changeState,
    handlePlayPause,
    handleMuteChange,
    handleVolumeChange,
    handleProgressChange,
  };
};

export default useTrack;
