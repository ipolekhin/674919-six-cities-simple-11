import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import App from './components/app/app';
import {store} from './store';
import {checkAuthAction} from './store/user-process/api';
import HistoryRoute from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <ErrorMessage/>
        <App/>
      </HistoryRoute>
    </Provider>
  </React.StrictMode>
);
