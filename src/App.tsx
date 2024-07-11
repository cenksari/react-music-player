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
   * Attempts to play the current audio track and handles the play promise.
   *
   * @returns {void}
   */
  const playTrackPromise = (): void => {
    setTimeout(() => {
      audioRef.current?.load();

      const playPromise = audioRef.current?.play();

      if (playPromise) {
        playPromise.then(null).catch(null);
      }
    }, 500);
  };

  /**
   * Handles play and pause functionality for the audio player.
   *
   * @param {ITrack} track - The track to be played or paused.
   * @param {IAlbum} album - The album containing the track.
   * @returns {void}
   */
  const handlePlayPause = (track: ITrack, album: IAlbum): void => {
    if (currentTrack?.id !== track.id) {
      addItem(track, album);

      playTrackPromise();
    } else if (currentState === 'playing') {
      audioRef.current?.pause();
    } else {
      playTrackPromise();
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
