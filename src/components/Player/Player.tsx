import React from 'react';

import useTrack from '../../hooks/useTrack';

import type { ITrack, IAlbum } from '../../types/types';

import Volume from './Volume';
import Expand from './Expand';
import Control from './Control';
import Details from './Details';
import Progress from './Progress';
import Duration from './Duration';

import Utils from '../utils/Utils';

interface IProps {
  tracks?: ITrack[];
  audioRef?: React.RefObject<HTMLAudioElement> | null;
  handlePlayPause: (track: ITrack, album: IAlbum) => void;
}

const Player = ({ tracks, audioRef, handlePlayPause }: IProps): React.JSX.Element | null => {
  const [volume, setVolume] = React.useState<number>(0.5);
  const [muted, setMuted] = React.useState<boolean>(false);
  const [buffered, setBuffered] = React.useState<number>(0);
  const [prev, setPrev] = React.useState<ITrack | null>(null);
  const [next, setNext] = React.useState<ITrack | null>(null);
  const [trackDuration, setTrackDuration] = React.useState<number>(0);
  const [currrentProgress, setCurrrentProgress] = React.useState<number>(0);

  const { currentTrack, currentAlbum, changeState } = useTrack();

  React.useEffect(() => {
    if (tracks) {
      const currentIndex = tracks.findIndex((track) => track.id === currentTrack?.id);

      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;

      setPrev(tracks[prevIndex]);
      setNext(tracks[nextIndex]);
    }
  }, [tracks, currentTrack?.id]);

  const handleOnEnded = (): void => {};

  const handleOnLoadedMetaData = (): void => {
    if (audioRef?.current) {
      setTrackDuration(audioRef.current.duration);
    }
  };

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

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;
      if (audioElement.duration > 0) {
        for (let i = 0; i < audioElement.buffered.length; i += 1) {
          if (
            audioElement.buffered.start(audioElement.buffered.length - 1 - i) <
            audioElement.currentTime
          ) {
            const bufferedLength = audioElement.buffered.end(audioElement.buffered.length - 1 - i);
            setBuffered(bufferedLength);
            break;
          }
        }
      }
    }
  };

  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      setCurrrentProgress(e.currentTarget.valueAsNumber);

      audioElement.currentTime = e.currentTarget.valueAsNumber;
    }
  };

  if (currentTrack && currentAlbum) {
    return (
      <div className='player'>
        <Progress
          buffered={buffered}
          duration={trackDuration}
          onChange={onProgressChange}
          currentProgress={currrentProgress}
        />

        <audio
          controls
          autoPlay
          ref={audioRef}
          onEnded={handleOnEnded}
          src={currentTrack.mediaurl}
          onProgress={handleBufferProgress}
          onPause={() => changeState('paused')}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
          }}
          onPlaying={() => changeState('playing')}
          onLoadedMetadata={handleOnLoadedMetaData}
          onTimeUpdate={(e) => {
            handleBufferProgress(e);
            setCurrrentProgress(e.currentTarget.currentTime);
          }}
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
