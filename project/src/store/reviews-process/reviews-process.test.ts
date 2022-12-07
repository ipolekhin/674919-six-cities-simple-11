import reviewsReducer from './reviews-process';
import {setReviewRestStatus} from './reviews-process';
import {fetchReviewsOfOffersAction} from './api';
import {ReviewStatus} from '../../const';
import {makeFakeReviews} from '../../utils/mocks';
// utils mocks

const reviews = makeFakeReviews();

describe('Reducer: reviews', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({isReviewsLoading: ReviewStatus.ReviewRest, reviewsOfOffer: []});
  });

  it('should return initial state of isReviewsLoading', () => {
    const state = {isReviewsLoading: ReviewStatus.ReviewRest, reviewsOfOffer: []};
    expect(reviewsReducer(state, setReviewRestStatus()))
      .toEqual({isReviewsLoading: ReviewStatus.ReviewRest, reviewsOfOffer: []});
  });

  it('should update reviews by load reviews of offer', () => {
    const state = {isReviewsLoading: ReviewStatus.ReviewRest, reviewsOfOffer: []};
    expect(reviewsReducer(state, {type: fetchReviewsOfOffersAction.fulfilled.type, payload: reviews}))
      .toEqual({isReviewsLoading: ReviewStatus.ReviewRest, reviews});
  });
});
