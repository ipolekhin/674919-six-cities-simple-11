import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../name-space';
import {Cities, SortList} from '../../const';
import {fetchOneOfferAction, fetchOffersAction, fetchOffersNearAction} from './api';
import {Data} from '../../types/state';
import {changeCity, setSortName} from '../action';

const initialState: Data = {
  city: Cities[0],
  offer: null,
  offers: [],
  offersNear: [],
  sortName: SortList.POPULAR,
  isOffersDataLoading: false,
  error: null,
};

export const dataReducer = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOneOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOneOfferAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOneOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, action) => {
        state.offersNear = action.payload;
      })
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setSortName, (state, action) => {
        state.sortName = action.payload;
      });
  },
});
