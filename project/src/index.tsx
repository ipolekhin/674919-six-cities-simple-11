import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Store = {
  CountPlaces: 5,
} as const;

root.render(
  <React.StrictMode>
    <App
      countPlaces={Store.CountPlaces}
    />
  </React.StrictMode>,
);
