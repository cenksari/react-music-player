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

  const [volume, setVolume] = React.useState<number>(0.5);
  const [muted, setMuted] = React.useState<boolean>(false);
  const [lastVolume, setLastVolume] = React.useState<number>(0.5);
  const [trackDuration, setTrackDuration] = React.useState<number>(0);
  const [prevTrack, setPrevTrack] = React.useState<ITrack | null>(null);
  const [nextTrack, setNextTrack] = React.useState<ITrack | null>(null);
  const [currentProgress, setCurrrentProgress] = React.useState<number>(0);
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

    const audioPromise = audioElement?.play();

    audioPromise?.then(null).catch(() => {
      // log error
    });
  };

  React.useEffect(() => {
    if (currentAlbum?.tracks) {
      const currentIndex = currentAlbum.tracks.findIndex((track) => track.id === currentTrack?.id);

      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;

      setPrevTrack(currentAlbum.tracks[prevIndex]);
      setNextTrack(currentAlbum.tracks[nextIndex]);

      setTrackDuration(0);
      setCurrrentProgress(0);
    }
  }, [currentAlbum, currentTrack?.id]);

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

  /**
   * Handles the event when the current track ends.
   * If there is a next track and a current album, it plays the next track.
   * Otherwise, it removes the current item and resets the track duration and current progress.
   */
  const handleOnEnded = (): void => {
    if (nextTrack && currentAlbum) {
      playPause(nextTrack, currentAlbum);
    } else {
      removeItem();
      setTrackDuration(0);
      setCurrrentProgress(0);
    }
  };

  /**
   * Handles the event when the metadata of the audio is loaded.
   * Sets the track duration using the duration of the audio element.
   */
  const handleOnLoadedMetaData = (): void => {
    if (audioRef?.current) {
      setTrackDuration(audioRef.current.duration);
    }
  };

  /**
   * Handles the event when the audio element can start playing.
   * Sets the volume of the audio element to the current volume state.
   *
   * @param {React.SyntheticEvent<HTMLAudioElement>} e - The synthetic event triggered by the audio element.
   * @returns {void}
   */
  const handleOnCanPlay = (e: React.SyntheticEvent<HTMLAudioElement>): void => {
    e.currentTarget.volume = volume;
  };

  /**
   * Handles the volume change event.
   * Sets the volume of the audio element and updates the muted state if the volume is set to 0.
   *
   * @param {number} volumeValue - The new volume value to be set.
   */
  const handleVolumeChange = (volumeValue: number): void => {
    if (audioRef?.current) {
      setVolume(volumeValue);

      const audioElement = audioRef.current;

      audioElement.volume = volumeValue;

      if (volumeValue === 0) {
        setMuted(true);

        setLastVolume(0.1);
      }
    }
  };

  /**
   * Handles the mute change event.
   * Toggles the muted state and sets the volume of the audio element accordingly.
   */
  const handleMuteChange = React.useCallback((): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      if (muted) {
        setMuted(false);

        setVolume(lastVolume);

        audioElement.volume = lastVolume;
      } else {
        setLastVolume(audioElement.volume);

        setVolume(0);

        setMuted(true);

        audioElement.volume = 0;
      }
    }
  }, [muted, lastVolume]);

  /**
   * Handles the progress change event.
   * Updates the current progress of the audio element and sets the current time accordingly.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event triggered by the progress input.
   */
  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      setCurrrentProgress(e.currentTarget.valueAsNumber);

      audioElement.currentTime = e.currentTarget.valueAsNumber;
    }
  };

  const providerValue = React.useMemo(
    () => ({
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
      playPause,
      removeItem,
      changeState,
      onProgressChange,
      handleMuteChange,
      handleVolumeChange,
    }),
    [
      muted,
      volume,
      prevTrack,
      nextTrack,
      currentState,
      currentTrack,
      currentAlbum,
      trackDuration,
      currentProgress,
      playPause,
      handleMuteChange,
    ]
  );

  return (
    <TrackContext.Provider value={providerValue}>
      <audio
        ref={audioRef}
        preload='auto'
        onEnded={handleOnEnded}
        onCanPlay={handleOnCanPlay}
        onPause={() => changeState('paused')}
        onPlaying={() => changeState('playing')}
        onLoadedMetadata={handleOnLoadedMetaData}
        onDurationChange={(e) => setTrackDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrrentProgress(e.currentTarget.currentTime)}
      >
        <track kind='captions' />
        <source type='audio/mpeg' src={currentTrack?.mediaurl} />
        Your browser does not support the audio tag.
      </audio>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackProvider;
