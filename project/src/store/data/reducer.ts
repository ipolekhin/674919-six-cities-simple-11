import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffer,
  loadOffers,
  loadOffersNear,
  setError,
  setOffersDataLoadingStatus,
  setSortName
} from './action';
import {Cities, SortList} from '../../const';
import {Offer, Offers} from '../../types/offers';

const initialState = {
  city: Cities[0],
  offer: null as Offer | null,
  offers: [] as Offers | never[],
  offersNear: [] as Offers | never[],
  sortName: SortList.POPULAR as string,
  isOffersDataLoading: false,
  error: null as string | null,
};

const dataReducer = createReducer(initialState, (builder) => {
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {dataReducer};
