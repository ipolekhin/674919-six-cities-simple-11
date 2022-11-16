import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setError, setOffersDataLoadingStatus, setSortName} from './action';
import {Cities, SORT_NAMES} from '../const';
import {Offers} from '../types/offers';

const initialState = {
  city: Cities[0],
  offers: [] as Offers | never[],
  sortName: SORT_NAMES[0],
  isOffersDataLoading: false,
  error: null as string | null,
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
    });
});

export {reducer};
