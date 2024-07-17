import React from 'react';

const Search = (): React.JSX.Element => {
  return (
    <div className='search flex flex-h-center'>
      <div className='search-container'>
        <label
          htmlFor='search'
          className='material-symbols-outlined flex flex-gap-medium flex-h-center flex-v-center'
        >
          search
          <input
            type='text'
            id='search'
            name='search'
            maxLength={32}
            autoComplete='off'
            placeholder='Search songs, albums, artists...'
          />
        </label>
      </div>
    </div>
  );
};

export default Search;
