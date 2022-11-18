import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  requireAuthorization, setAuthorizationLogin,
  setError,
  setOffersDataLoadingStatus,
  setSortName
} from './action';
import {AuthorizationStatus, Cities, SORT_NAMES} from '../const';
import {Offers} from '../types/offers';

const initialState = {
  city: Cities[0],
  offers: [] as Offers | never[],
  sortName: SORT_NAMES[0],
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
