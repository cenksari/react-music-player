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
  const audioRef = React.useRef<HTMLAudioElement>(null);

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

  /**
   * Handles the play functionality for the audio element.
   * Plays the audio if the audioRef is defined and the current audio element is available.
   *
   * @returns {void}
   */
  const handlePlay = (): void => {
    const audioElement = audioRef?.current;

    audioElement?.play().then(null).catch(null);
  };

  React.useEffect(() => {
    const audioElement = audioRef?.current;

    audioElement?.addEventListener('loadeddata', handlePlay);

    return () => {
      audioElement?.removeEventListener('loadeddata', handlePlay);
    };
  }, [currentTrack]);

  /**
   * Handles play and pause functionality for the audio player.
   *
   * @param {ITrack} track - The track to be played or paused.
   * @param {IAlbum} album - The album containing the track.
   * @returns {void}
   */
  const playPause = React.useCallback(
    (track: ITrack, album: IAlbum): void => {
      const audioElement = audioRef?.current;

      if (currentTrack?.id !== track.id) {
        addItem(track, album);

        audioElement?.load();
      } else if (currentState === 'playing') {
        audioElement?.pause();
      } else {
        handlePlay();
      }
    },
    [currentState, currentTrack?.id]
  );

  const providerValue = React.useMemo(
    () => ({
      audioRef,
      currentState,
      currentTrack,
      currentAlbum,
      addItem,
      playPause,
      removeItem,
      changeState,
    }),
    [currentState, currentTrack, currentAlbum, playPause]
  );

  return <TrackContext.Provider value={providerValue}>{children}</TrackContext.Provider>;
};

export default TrackProvider;
