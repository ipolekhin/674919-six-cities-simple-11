import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {
  loadReviewsOfOffer,
} from './action';
import {APIRoute} from '../../const';
import {ReviewForm, Reviews} from '../../types/reviews';

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
