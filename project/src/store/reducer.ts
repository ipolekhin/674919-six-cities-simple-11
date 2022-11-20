import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffer,
  loadOffers,
  loadOffersNear, loadReviewsOfOffer,
  requireAuthorization,
  setAuthorizationLogin,
  setError,
  setOffersDataLoadingStatus,
  setSortName
} from './action';
import {AuthorizationStatus, Cities, SortList} from '../const';
import {Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';

const initialState = {
  city: Cities[0],
  offer: null as Offer | null,
  offers: [] as Offers | never[],
  offersNear: [] as Offers | never[],
  reviewsOfOffer: [] as Reviews,
  sortName: SortList.POPULAR as string,
  isOffersDataLoading: false,
  error: null as string | null,
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.sortName = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadOffersNear, (state, action) => {
      state.offersNear = action.payload;
    })
    .addCase(loadReviewsOfOffer, (state, action) => {
      state.reviewsOfOffer = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationLogin, (state, action) => {
      state.login = action.payload;
    });
});

export {reducer};
