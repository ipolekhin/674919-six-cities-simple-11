import {createSlice} from '@reduxjs/toolkit';
import {Reviews} from '../../types/reviews';
import {NameSpace} from '../name-space';
import {fetchReviewsOfOffersAction, sendReviewOfOfferAction} from './api';

const initialState = {
  reviewsOfOffer: [] as Reviews,
};


export const reviewsReducer = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsOfOffersAction.fulfilled, (state, action) => {
        state.reviewsOfOffer = action.payload;
      });
    builder
      .addCase(sendReviewOfOfferAction.fulfilled, (state, action) => {
        state.reviewsOfOffer = action.payload;
      });
  },
});
