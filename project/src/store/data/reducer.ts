import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../name-space';
import {AppRoute, Cities, SortList} from '../../const';
import {fetchOffersAction, fetchOffersNearAction, fetchOneOfferAction, clearErrorAction} from './api';
import {Data} from '../../types/state';
import {redirectToRoute} from '../action';

const initialState: Data = {
  city: Cities[0],
  offer: null,
  offers: [],
  offersNear: [],
  sortName: SortList.Popular,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  error: null,
};

const dataReducer = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSortName: (state, action: PayloadAction<string>) => {
      state.sortName = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    //todo
    // clearErrorAction: (state) => {
    //   state.error = null;
    // },
    setOffersDataLoadingStatus: (state, action:PayloadAction<boolean>) => {
      state.isOffersDataLoading = false;
    },
  },
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
        redirectToRoute(AppRoute.PageNotExist);
      })
      .addCase(fetchOneOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersNearAction.fulfilled, (state, action) => {
        state.offersNear = action.payload;
      })
      .addCase(clearErrorAction.fulfilled, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {changeCity, setError, setOffersDataLoadingStatus, setSortName} = dataReducer.actions;
export default dataReducer.reducer;
