import React from 'react';

import TrackContext from '../contexts/TrackContext';

import type { IAlbum, ITrack } from '../types/types';

interface IProps {
  children: React.ReactNode;
}

const TrackProvider = ({ children }: IProps): React.JSX.Element => {
  const [currentState, setCurrentState] = React.useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = React.useState<ITrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = React.useState<IAlbum | null>(null);

  const addItem = (track: ITrack, album: IAlbum): void => {
    setCurrentTrack(track);
    setCurrentAlbum(album);
    setCurrentState('playing');
  };

  const removeItem = (): void => {
    setCurrentTrack(null);
    setCurrentAlbum(null);
    setCurrentState(null);
  };

  const changeState = (state: string): void => {
    setCurrentState(state);
  };

  const providerValue = React.useMemo(
    () => ({ currentState, currentTrack, currentAlbum, addItem, removeItem, changeState }),
    [currentState, currentTrack, currentAlbum]
  );

  return <TrackContext.Provider value={providerValue}>{children}</TrackContext.Provider>;
};

export default TrackProvider;
