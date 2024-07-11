import React from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

// types
import type { IAlbum, ITrack } from '../types/types';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const TrackProvider = ({ children }: IProps): React.JSX.Element => {
  const [currentState, setCurrentState] = React.useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = React.useState<ITrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = React.useState<IAlbum | null>(null);

  /**
   * Adds a track and album to the current state and sets the state to 'playing'.
   *
   * @param {ITrack} track - The track to be added.
   * @param {IAlbum} album - The album containing the track.
   * @returns {void}
   */
  const addItem = (track: ITrack, album: IAlbum): void => {
    setCurrentTrack(track);
    setCurrentAlbum(album);
  };

  /**
   * Removes the current track and album from the state and sets the state to null.
   *
   * @returns {void}
   */
  const removeItem = (): void => {
    setCurrentTrack(null);
    setCurrentAlbum(null);
    setCurrentState(null);
  };

  /**
   * Changes the current state to the provided state.
   *
   * @param {string} state - The new state to be set.
   * @returns {void}
   */
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
