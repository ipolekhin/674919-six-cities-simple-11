import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
