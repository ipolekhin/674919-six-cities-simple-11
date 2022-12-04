import {NameSpace} from '../name-space';
import {State} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';
import {sortedOffers} from '../../utils/utils';

const NAME_SPACE = NameSpace.Data;

export const getOffersDataLoadingStatus = (state: State) => state[NAME_SPACE].isOffersDataLoading;

export const getCurrentCity = (state: State) => state[NAME_SPACE].city;

export const getOffers = (state: State) => state[NAME_SPACE].offers;

export const getOffer = (state: State) => state[NAME_SPACE].offer;

export const getOffersNear = (state: State) => state[NAME_SPACE].offersNear;

export const getOffersOfCity = createSelector(
  getOffers,
  getCurrentCity,
  (resultOne, resultTwo) => resultOne.filter((offer) => offer.city.name === resultTwo)
);

export const getCurrentSortName = (state: State) => state[NAME_SPACE].sortName;

export const getOffersCitySorted = createSelector(
  getOffersOfCity,
  getCurrentSortName,
  (resultOne, resultTwo) => sortedOffers(resultOne, resultTwo)
);

export const getErrorMessage = (state: State) => state[NAME_SPACE].error;
