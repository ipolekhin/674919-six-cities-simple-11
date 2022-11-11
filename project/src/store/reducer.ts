import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers} from './action';
import {Cities} from '../const';

const initialState = {
  city: Cities[0],
  offers: [],
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
