import React from 'react';

import { Link } from 'react-router-dom';

const Song = (): React.JSX.Element => {
  return (
    <Link to='/' className='song flex flex-gap flex-v-center active-opacity'>
      <div
        className='image'
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/FkiLeJISpkE_HiuIwW-pDvvcCF5BbG0js2fLr0wmjC9OXCo6JrQHYLHHFvdoKmXaxr5hBeYGVs0BoSQ=w544-h544-l90-rj')`,
        }}
      />
      <div className='name flex flex-grow flex-gap-small flex-v-center'>
        <strong>Angel Of Death</strong>
        <span className='material-symbols-outlined'>explicit</span>
      </div>
      <div className='artist-name flex flex-grow'>
        <span>Slayer</span>
      </div>
      <div className='play-count'>
        <span>24M plays</span>
      </div>
      <div className='album-name flex flex-grow flex-h-end'>
        <span>Reign In Blood</span>
      </div>
      <div className='flex flex-h-center'>
        <div className='song-arrow flex flex-h-center flex-v-center'>
          <span className='material-symbols-outlined'>play_arrow</span>
        </div>
      </div>
    </Link>
  );
};

export default Song;
