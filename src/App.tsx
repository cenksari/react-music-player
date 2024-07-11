import React from 'react';

// hooks
import useTrack from './hooks/useTrack';

// components
import Cover from './components/Cover/Cover';
import Player from './components/Player/Player';
import Information from './components/Information/Information';

// types
import type { IAlbum, ITrack } from './types/types';

// data
import trackData from './data/trackData.json';
import albumData from './data/albumData.json';

// styles
import './styles/player.css';

const App = (): React.JSX.Element => {
  const { currentState, currentTrack, addItem } = useTrack();

  const audioRef = React.useRef<HTMLAudioElement>(null);

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

  return (
    <Cover image={albumData.image}>
      <Player audioRef={audioRef} tracks={trackData} handlePlayPause={handlePlayPause} />
      <Information album={albumData} tracks={trackData} handlePlayPause={handlePlayPause} />
    </Cover>
  );
};

export default App;
