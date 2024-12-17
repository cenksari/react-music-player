import { Link } from 'react-router-dom';

// hooks
import useTrack from '../hooks/useTrack';

// components
import Song from '../components/Song/Song';
import Albums from '../components/Artist/Albums';
import Header from '../components/Artist/Header';

// data
import albumData from '../data/albumData.json';

const ArtistPage: React.FC = () => {
  const { currentState, currentTrack } = useTrack();

  return (
    <div className='artist flex flex-column flex-gap no-select'>
      <Header artist={albumData[0].artist} />
      <section className='container flex flex-column flex-gap'>
        <div className='flex flex-space-between flex-v-center'>
          <Link to='/' className='active-opacity underline'>
            <h2>Songs</h2>
          </Link>
        </div>
        <div className='flex flex-column'>
          <Song
            album={albumData[0]}
            track={albumData[0].tracks[0]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[0].tracks[0].id}
          />
          <Song
            album={albumData[2]}
            track={albumData[2].tracks[4]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[2].tracks[4].id}
          />
          <Song
            album={albumData[1]}
            track={albumData[1].tracks[0]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[1].tracks[0].id}
          />
          <Song
            album={albumData[2]}
            track={albumData[2].tracks[6]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[2].tracks[6].id}
          />
          <Song
            album={albumData[0]}
            track={albumData[0].tracks[8]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[0].tracks[8].id}
          />
          <Song
            album={albumData[3]}
            track={albumData[3].tracks[0]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[3].tracks[0].id}
          />
          <Song
            album={albumData[2]}
            track={albumData[2].tracks[9]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[2].tracks[9].id}
          />
          <Song
            album={albumData[3]}
            track={albumData[3].tracks[3]}
            playing={currentState === 'playing' && currentTrack?.id === albumData[3].tracks[3].id}
          />
        </div>
      </section>
      <Albums url={`/albums/${albumData[0].artist.id}`} title='Albums' albums={albumData} />
      <Albums url={`/albums/${albumData[0].artist.id}`} title='Featured on' albums={albumData} />
    </div>
  );
};

export default ArtistPage;
