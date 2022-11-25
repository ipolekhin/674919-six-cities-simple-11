import {createReducer, createSlice} from '@reduxjs/toolkit';
import {
  loadReviewsOfOffer,
} from './action';
import {Reviews} from '../../types/reviews';
import {NameSpace} from '../name-space';

const initialState = {
  reviewsOfOffer: [] as Reviews,
};

const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviewsOfOffer, (state, action) => {
      state.reviewsOfOffer = action.payload;
    });
});

export {reviewsReducer};

// export const reviewsReducer = createSlice({
//   name: NameSpace.Reviews,
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(loadReviewsOfOffer, (state, action) => {
//         state.reviewsOfOffer = action.payload;
//       });
//   },
// });
