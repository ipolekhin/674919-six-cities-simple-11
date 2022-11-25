import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import App from './components/app/app';
import {store} from './store';
import {fetchOffersAction} from './store/data/api';
import {checkAuthAction} from './store/user/api';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  // </React.StrictMode>
);
