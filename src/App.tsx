/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './styles/player.css';

const App = (): React.JSX.Element => {
  return (
    <>
      <div
        className='cover'
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/FkiLeJISpkE_HiuIwW-pDvvcCF5BbG0js2fLr0wmjC9OXCo6JrQHYLHHFvdoKmXaxr5hBeYGVs0BoSQ=w544-h544-l90-rj")',
        }}
      />

      <div className='full-h flex flex-v-center flex-h-center'>
        <div className='information flex flex-column flex-gap'>
          <img
            width='400'
            src='https://lh3.googleusercontent.com/FkiLeJISpkE_HiuIwW-pDvvcCF5BbG0js2fLr0wmjC9OXCo6JrQHYLHHFvdoKmXaxr5hBeYGVs0BoSQ=w544-h544-l90-rj'
            alt=''
            draggable='false'
          />

          <div className='album flex flex-column flex-gap-small flex-h-center flex-v-center'>
            <a href='/' className='active-opacity'>
              <h3>Slayer</h3>
            </a>
            <a href='/' className='active-opacity'>
              <span>Seasons In The Abyss</span>
            </a>
            <span className='album-info'>15 Songs - 48 Minutes</span>
          </div>

          <div className='playlist scroller-vertical'>
            <a href='/' className='active-opacity'>
              <div className='track flex flex-gap flex-v-center flex-space-between'>
                <span className='flex flex-h-center flex-v-center track-number material-symbols-outlined'>
                  play_arrow
                </span>
                <span className='flex flex-column flex-grow flex-gap-small'>
                  <em>War Ensemble</em>
                  <em>25M Plays</em>
                </span>
                <span>4:59</span>
              </div>
            </a>

            <a href='/' className='active-opacity'>
              <div className='playing track flex flex-gap flex-v-center flex-space-between'>
                <span className='flex flex-h-center flex-v-center track-number'>1</span>
                <span className='flex flex-column flex-grow flex-gap-small'>
                  <em>Blood Red</em>
                  <em>1.5M Plays</em>
                </span>
                <span>4:59</span>
              </div>
            </a>
          </div>
        </div>

        <div className='player'>
          <div className='progress'>
            <div className='progress-bar' />
          </div>

          <div className='player-container flex flex-gap flex-v-center flex-space-between'>
            <div className='player-buttons flex flex-gap flex-h-start flex-v-center flex-1'>
              <button type='button' className='active-opacity'>
                <span className='material-symbols-outlined'>skip_previous</span>
              </button>
              <button type='button' className='big active-opacity'>
                <span className='material-symbols-outlined'>play_arrow</span>
              </button>
              <button type='button' className='active-opacity'>
                <span className='material-symbols-outlined'>skip_next</span>
              </button>

              <div className='player-duration flex flex-gap-medium flex-v-center'>
                <span>00:00</span>
                <em>/</em>
                <span>00:00</span>
              </div>
            </div>

            <div className='player-information flex flex-gap flex-grow flex-h-center flex-v-center'>
              <a href='/' className='active-opacity'>
                <img
                  width='50'
                  src='https://lh3.googleusercontent.com/FkiLeJISpkE_HiuIwW-pDvvcCF5BbG0js2fLr0wmjC9OXCo6JrQHYLHHFvdoKmXaxr5hBeYGVs0BoSQ=w544-h544-l90-rj'
                  alt=''
                  draggable='false'
                />
              </a>
              <div className='track-info flex flex-column'>
                <strong>Spirit In Black</strong>
                <span className='flex flex-gap-small'>
                  <a href='/' className='active-opacity'>
                    Slayer
                  </a>
                  &bull;
                  <a href='/' className='active-opacity'>
                    Seasons In The Abyss
                  </a>
                </span>
              </div>
            </div>

            <div className='player-controls flex flex-gap flex-h-end flex-v-center flex-1'>
              <button type='button' className='active-opacity'>
                <span className='material-symbols-outlined'>volume_up</span>
              </button>
              <button type='button' className='active-opacity'>
                <span className='material-symbols-outlined'>keyboard_arrow_up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
