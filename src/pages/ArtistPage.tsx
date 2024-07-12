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
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      </div>

      <Albums albums={albumData} />
    </div>
  );
};

export default ArtistPage;
