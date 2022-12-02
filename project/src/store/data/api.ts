import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import {APIRoute} from '../../const';
// import {TIMEOUT_SHOW_ERROR} from '../../const';
// import {store} from '../index';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOneOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
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

// export const clearErrorAction = createAsyncThunk(
//   'data/clearError',
//   () => {
//     store.dispatch(setOffersDataLoadingStatus(false));
//     setTimeout(
//       () => store.dispatch(setError(null)
//       ), TIMEOUT_SHOW_ERROR);
//   },
// );
