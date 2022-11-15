import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers} from './action';
import {Cities} from '../const';
import {Offers} from '../types/offers';

const initialState = {
  city: Cities[0],
  offers: [] as Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
