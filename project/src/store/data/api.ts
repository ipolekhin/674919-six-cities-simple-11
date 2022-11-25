import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {Offer, Offers} from '../../types/offers';
import {
  loadOffer,
  loadOffers,
  loadOffersNear,
  redirectToRoute,
  setError,
  setOffersDataLoadingStatus
} from './action';
import {APIRoute, AppRoute, TIMEOUT_SHOW_ERROR} from '../../const';
import {store} from '../index';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
      dispatch(fetchOffersNearAction(id));
      // dispatch(fetchReviewsOfOffersAction(id));
    } catch {
      dispatch(redirectToRoute(AppRoute.PageNotExist));
    }
  },
);

export const fetchOffersNearAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNear',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNear(data));
  },
);


export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    store.dispatch(setOffersDataLoadingStatus(false));
    setTimeout(
      () => store.dispatch(setError(null)
      ), TIMEOUT_SHOW_ERROR);
  },
);
