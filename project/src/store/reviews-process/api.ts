import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {APIRoute} from '../../const';
import {ReviewForm, Reviews} from '../../types/reviews';

export const fetchReviewsOfOffersAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewsOfOffers',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const sendReviewOfOfferAction = createAsyncThunk<Reviews, ReviewForm, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewOfOffers',
  async ({review, rating}, {dispatch, extra: api}) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Comments}/20`, {comment: review, rating});
    return data;
  },
);
