import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offer, Offers} from '../types/offers';
import {
  loadOffer,
  loadOffers,
  loadOffersNear,
  loadReviewsOfOffer,
  redirectToRoute,
  requireAuthorization,
  setAuthorizationLogin,
  setError,
  setOffersDataLoadingStatus
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {store} from './index';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token.';
import {ReviewForm, Reviews} from '../types/reviews';

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
      dispatch(fetchReviewsOfOffersAction(id));
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

export const fetchReviewsOfOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNear',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviewsOfOffer(data));
  },
);

export const sendReviewOfOfferAction = createAsyncThunk<void, ReviewForm, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewOfOffersAction',
  async ({review, rating}, {dispatch, extra: api}) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Comments}/20`, {comment: review, rating});
    dispatch(loadReviewsOfOffer(data));
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data : {email}} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAuthorizationLogin(email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data : {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setAuthorizationLogin(email));
  },
);

export const logOutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setAuthorizationLogin(''));
  },
);
