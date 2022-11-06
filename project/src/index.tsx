import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Store = {
  CountPlaces: 5,
  AuthorizationStatus: 'NO_AUTH',
} as const;

root.render(
  <React.StrictMode>
    <App
      authorizationStatus={Store.AuthorizationStatus}
      countPlaces={Store.CountPlaces}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);
