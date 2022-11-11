import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store';
import {setOffers} from './store/action';

store.dispatch(setOffers(offers));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Store = {
  AuthorizationStatus: 'NO_AUTH',
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        authorizationStatus={Store.AuthorizationStatus}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
