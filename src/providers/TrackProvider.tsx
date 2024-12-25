import { useRef, useState, useEffect } from 'react';

// contexts
import TrackContext from '../contexts/TrackContext';

// types
import type { IAlbum, ITrack } from '../types/types';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const TrackProvider: React.FC<IProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null!);

  const [volume, setVolume] = useState<number>(0.5);
  const [muted, setMuted] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(0.5);
  const [trackDuration, setTrackDuration] = useState<number>(0);
  const [prevTrack, setPrevTrack] = useState<ITrack | null>(null);
  const [nextTrack, setNextTrack] = useState<ITrack | null>(null);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [currentState, setCurrentState] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);

  useEffect(() => {
    if (currentAlbum?.tracks) {
      const currentIndex = currentAlbum.tracks.findIndex((track) => track.id === currentTrack?.id);

      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;

      setPrevTrack(currentAlbum.tracks[prevIndex]);
      setNextTrack(currentAlbum.tracks[nextIndex]);

      setTrackDuration(0);
      setCurrentProgress(0);
    }
  }, [currentAlbum, currentTrack?.id]);

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

  useEffect(() => {
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
  const handlePlayPause = (track: ITrack, album: IAlbum): void => {
    const audioElement = audioRef?.current;

    if (currentTrack?.id !== track.id) {
      addItem(track, album);

      audioElement?.load();
    } else if (currentState === 'playing') {
      audioElement?.pause();
    } else {
      handlePlay();
    }
  };

  /**
   * Handles the event when the current track ends.
   * If there is a next track and a current album, it plays the next track.
   * Otherwise, it removes the current item and resets the track duration and current progress.
   */
  const handleOnEnded = (): void => {
    if (nextTrack && currentAlbum) {
      handlePlayPause(nextTrack, currentAlbum);
    } else {
      setCurrentProgress(0);
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
  const handleMuteChange = (): void => {
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
  };

  /**
   * Handles the progress change event.
   * Updates the current progress of the audio element and sets the current time accordingly.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event triggered by the progress input.
   */
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      setCurrentProgress(e.currentTarget.valueAsNumber);

      audioElement.currentTime = e.currentTarget.valueAsNumber;
    }
  };

  const providerValue = {
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

  return (
    <TrackContext value={providerValue}>
      <audio
        ref={audioRef}
        preload='auto'
        onEnded={handleOnEnded}
        onCanPlay={handleOnCanPlay}
        onPause={() => changeState('paused')}
        onPlaying={() => changeState('playing')}
        onLoadedMetadata={handleOnLoadedMetaData}
        onDurationChange={(e) => setTrackDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
      >
        <track kind='captions' />
        <source type='audio/mpeg' src={currentTrack?.mediaurl} />
        Your browser does not support the audio tag.
      </audio>
      {children}
    </TrackContext>
  );
};

export default TrackProvider;
