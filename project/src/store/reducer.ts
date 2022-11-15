import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setSortName} from './action';
import {Cities, SORT_NAMES} from '../const';
import {Offers} from '../types/offers';

const initialState = {
  city: Cities[0],
  offers: [] as Offers,
  sortName: SORT_NAMES[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.sortName = action.payload;
    });
});

export {reducer};
