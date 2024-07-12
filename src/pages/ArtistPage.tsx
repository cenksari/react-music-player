import React from 'react';

import { Link } from 'react-router-dom';

// components
import Song from '../components/Artist/Song';
import Cover from '../components/Artist/Cover';
import Albums from '../components/Artist/Albums';

// data
import albumData from '../data/albumData.json';

const ArtistPage = (): React.JSX.Element => {
  return (
    <div className='artist flex flex-column flex-gap no-select'>
      <Cover artist={albumData[0].artist} />

      <div className='container flex flex-column flex-gap'>
        <Link to='/' className='active-opacity underline'>
          <h3>Songs</h3>
        </Link>

        <div className='flex flex-column'>
          <Song album={albumData[0]} track={albumData[0].tracks[0]} />
          <Song album={albumData[1]} track={albumData[0].tracks[4]} />
          <Song album={albumData[1]} track={albumData[0].tracks[6]} />
          <Song album={albumData[0]} track={albumData[0].tracks[5]} />
          <Song album={albumData[1]} track={albumData[0].tracks[9]} />
        </div>
      </div>

      <Albums title='Albums' albums={albumData} />

      <Albums title='Appeared on' albums={albumData} />
    </div>
  );
};

export default ArtistPage;
