import React from 'react';

import ReactDOM from 'react-dom/client';

import TrackProvider from './providers/TrackProvider';

import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <TrackProvider>
    <App />
  </TrackProvider>
);
