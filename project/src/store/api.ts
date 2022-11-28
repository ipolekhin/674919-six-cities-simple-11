import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  setError,
  setOffersDataLoadingStatus
} from './action';
import {TIMEOUT_SHOW_ERROR} from '../const';
import {store} from './index';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    store.dispatch(setOffersDataLoadingStatus(false));
    setTimeout(
      () => store.dispatch(setError(null)
      ), TIMEOUT_SHOW_ERROR);
  },
);
