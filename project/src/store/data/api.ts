import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import {APIRoute} from '../../const';
import {TIMEOUT_SHOW_ERROR} from '../../const';
import {setError} from './reducer';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOneOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOneOffer',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchOffersNearAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNear',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  async (_arq, {dispatch}) => {
    // store.dispatch(setOffersDataLoadingStatus(false));
    // setTimeout(
    //   () => dispatch(setError(null)
    //   ), TIMEOUT_SHOW_ERROR);

    const timeout = new Promise((resolve): null => {
      setTimeout(() => {
        resolve(null);
      }, TIMEOUT_SHOW_ERROR);
    });
    const data: null = await timeout;
    return data;
  },
);
