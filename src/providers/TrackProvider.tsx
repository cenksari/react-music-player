import React from 'react';

import TrackContext from '../contexts/TrackContext';

import type { IAlbum, ITrack } from '../types/types';

interface IProps {
  children: React.ReactNode;
}

const TrackProvider = ({ children }: IProps): React.JSX.Element => {
  const [currentTrack, setCurrentTrack] = React.useState<ITrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = React.useState<IAlbum | null>(null);

  const addItem = (album: IAlbum, track: ITrack): void => {
    setCurrentAlbum(album);
    setCurrentTrack(track);
  };

  const removeItem = (): void => {
    setCurrentAlbum(null);
    setCurrentTrack(null);
  };

  const providerValue = React.useMemo(
    () => ({ currentTrack, currentAlbum, addItem, removeItem }),
    [currentTrack, currentAlbum]
  );

  return <TrackContext.Provider value={providerValue}>{children}</TrackContext.Provider>;
};

export default TrackProvider;
