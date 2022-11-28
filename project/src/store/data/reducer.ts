import {createSlice} from '@reduxjs/toolkit';
// import {
//   changeCity,
//   loadOffer,
//   loadOffers,
//   loadOffersNear,
//   setError,
//   setOffersDataLoadingStatus,
//   setSortName
// } from './action';
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

// const dataReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       state.city = action.payload;
//     })
//     .addCase(setSortName, (state, action) => {
//       state.sortName = action.payload;
//     })
//     .addCase(loadOffers, (state, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(setOffersDataLoadingStatus, (state, action) => {
//       state.isOffersDataLoading = action.payload;
//     })
//     .addCase(loadOffer, (state, action) => {
//       state.offer = action.payload;
//     })
//     .addCase(loadOffersNear, (state, action) => {
//       state.offersNear = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     });
// });
//
// export {dataReducer};
