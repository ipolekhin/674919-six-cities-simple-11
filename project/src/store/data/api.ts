import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import {APIRoute} from '../../const';
import {TIMEOUT_SHOW_ERROR} from '../../const';
import {setError} from './reducer';
import {dropToken} from "../../services/token.";

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

export const countPlus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
}>(
  'data/countNew',
  (_arg, {dispatch}) => {
    console.log('countPlus API');
    dispatch(countPlus());
  },
);

export const clearErrorAction = createAsyncThunk<null>(
  'data/clearError',
  async () =>
  // store.dispatch(setOffersDataLoadingStatus(false));
  // setTimeout(
  //   () => dispatch(setError(null)
  //   ), TIMEOUT_SHOW_ERROR);

    await new Promise((resolve) => {
      const timerId = setTimeout(() => {
        resolve(null);
        clearTimeout(timerId);
      }, 5000);
    })
    // const data = null;

  // const timeout = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(null);
  //   }, TIMEOUT_SHOW_ERROR);
  // });
  // console.log(timeout);
  // const data: null = await timeout;
  // return data;
);

export const giveMeSomeTime = createAsyncThunk<null>(
  'todos/giveMeSomeTime',
  async () =>
    await new Promise((resolve) => {
      const timerId = setTimeout(() => {
        console.log('giveMeSomeTime api');
        resolve(null);
        clearTimeout(timerId);
      }, 2000);
    })
);
