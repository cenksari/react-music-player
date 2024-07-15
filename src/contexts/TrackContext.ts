import React from 'react';

// types
import type { ITrackContext } from '../types/types';

const TrackContext = React.createContext<ITrackContext>({
  muted: false,
  volume: 0.5,
  audioRef: null,
  prevTrack: null,
  nextTrack: null,
  trackDuration: 0,
  currentProgress: 0,
  currentState: null,
  currentTrack: null,
  currentAlbum: null,
  addItem: () => {},
  playPause: () => {},
  removeItem: () => {},
  changeState: () => {},
  onProgressChange: () => {},
  handleMuteChange: () => {},
  handleVolumeChange: () => {},
});

export default TrackContext;
