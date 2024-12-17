// hooks
import useTrack from '../../hooks/useTrack';

// types
import type { IAlbum } from '../../types/types';

// interfaces
interface IProps {
  album: IAlbum;
}

const Buttons: React.FC<IProps> = ({ album }) => {
  const { currentState, currentTrack, currentAlbum, handlePlayPause } = useTrack();

  /**
   * Handles the play/pause functionality for the album.
   * If the current album is not the same as the provided album, it plays the first track of the provided album.
   * If the current album is the same as the provided album, it toggles play/pause for the current track or the first track of the album.
   */
  const onPlayPause = (): void => {
    if (album.tracks) {
      if (currentAlbum?.id !== album.id) {
        handlePlayPause(album.tracks[0], album);
      } else {
        handlePlayPause(currentTrack || album.tracks[0], currentAlbum || album);
      }
    }
  };

  return (
    <section className='flex flex-gap flex-h-center flex-v-center'>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Add to playlist'
      >
        <span className='material-symbols-outlined'>library_add</span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Share'
      >
        <span className='material-symbols-outlined'>share</span>
      </button>
      <button
        type='button'
        onClick={() => onPlayPause()}
        disabled={!album.tracks || album.tracks.length === 0}
        className='play-button flex flex-h-center flex-v-center active-opacity'
      >
        <span className='material-symbols-outlined'>
          {currentAlbum?.id === album.id && currentState === 'playing' ? 'pause' : 'play_arrow'}
        </span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='Download'
      >
        <span className='material-symbols-outlined'>download</span>
      </button>
      <button
        type='button'
        className='flex flex-h-center flex-v-center small active-opacity'
        title='More'
      >
        <span className='material-symbols-outlined'>more_vert</span>
      </button>
    </section>
  );
};

export default Buttons;
