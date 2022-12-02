import {createSlice} from '@reduxjs/toolkit';
import {Reviews} from '../../types/reviews';
import {NameSpace} from '../name-space';
import {fetchReviewsOfOffersAction, sendReviewOfOfferAction} from './api';
import {ReviewStatus} from '../../const';
import {setReviewRestStatus} from '../action';

const initialState = {
  isReviewsLoading: ReviewStatus.ReviewRest,
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
      })
      .addCase(sendReviewOfOfferAction.pending, (state, action) => {
        state.isReviewsLoading = ReviewStatus.ReviewPending;
      })
      .addCase(sendReviewOfOfferAction.fulfilled, (state, action) => {
        state.reviewsOfOffer = action.payload;
        state.isReviewsLoading = ReviewStatus.ReviewFulfilled;
      })
      .addCase(setReviewRestStatus, (state, action) => {
        state.isReviewsLoading = ReviewStatus.ReviewRest;
      });
  },
});
