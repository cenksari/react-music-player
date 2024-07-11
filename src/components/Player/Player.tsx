import React from 'react';

// hooks
import useTrack from '../../hooks/useTrack';

// components
import Volume from './Volume';
import Expand from './Expand';
import Control from './Control';
import Details from './Details';
import Progress from './Progress';
import Duration from './Duration';

// types
import type { IAlbum, ITrack } from '../../types/types';

// utilities
import Utils from '../../utils/Utils';

// interfaces
interface IProps {
  tracks?: ITrack[];
  audioRef?: React.RefObject<HTMLAudioElement> | null;
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Player = ({ tracks, audioRef, handlePlayPause }: IProps): React.JSX.Element | null => {
  const [volume, setVolume] = React.useState<number>(0.5);
  const [muted, setMuted] = React.useState<boolean>(false);
  const [prev, setPrev] = React.useState<ITrack | null>(null);
  const [next, setNext] = React.useState<ITrack | null>(null);
  const [trackDuration, setTrackDuration] = React.useState<number>(0);
  const [currrentProgress, setCurrrentProgress] = React.useState<number>(0);

  const { currentTrack, currentAlbum, removeItem, changeState } = useTrack();

  React.useEffect(() => {
    if (tracks) {
      const currentIndex = tracks.findIndex((track) => track.id === currentTrack?.id);

      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;

      setPrev(tracks[prevIndex]);
      setNext(tracks[nextIndex]);

      setTrackDuration(0);
      setCurrrentProgress(0);
    }
  }, [tracks, currentTrack?.id]);

  /**
   * Handles the event when the current track ends.
   * If there is a next track and a current album, it plays the next track.
   * Otherwise, it removes the current item and resets the track duration and current progress.
   */
  const handleOnEnded = (): void => {
    if (next && currentAlbum) {
      handlePlayPause(next, currentAlbum);
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

        setVolume(0.3);
        audioElement.volume = 0.3;
      } else {
        setMuted(true);

        setVolume(0);
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
  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      setCurrrentProgress(e.currentTarget.valueAsNumber);

      audioElement.currentTime = e.currentTarget.valueAsNumber;
    }
  };

  if (currentTrack && currentAlbum) {
    return (
      <div className='player no-select'>
        <Progress
          duration={trackDuration}
          currentProgress={currrentProgress}
          onProgressChange={onProgressChange}
        />

        <audio
          autoPlay
          ref={audioRef}
          preload='metadata'
          onEnded={handleOnEnded}
          src={currentTrack.mediaurl}
          onPause={() => changeState('paused')}
          onPlaying={() => changeState('playing')}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
          }}
          onLoadedMetadata={handleOnLoadedMetaData}
          onTimeUpdate={(e) => setCurrrentProgress(e.currentTarget.currentTime)}
          onDurationChange={(e) => setTrackDuration(e.currentTarget.duration)}
        >
          <track kind='captions' />
        </audio>

        <div className='player-container flex flex-gap flex-v-center flex-space-between'>
          <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
            <Control prev={prev} next={next} handlePlayPause={handlePlayPause} />

            <Duration
              duration={Utils.formatTime(trackDuration)}
              current={Utils.formatTime(currrentProgress)}
            />
          </div>

          <Details track={currentTrack} album={currentAlbum} />

          <div className='player-controls flex flex-gap flex-h-end flex-v-center flex-1'>
            <Volume
              muted={muted}
              volume={volume}
              onMutePressed={handleMuteChange}
              onVolumeChange={handleVolumeChange}
            />
            <Expand />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Player;
