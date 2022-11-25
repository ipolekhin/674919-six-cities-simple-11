import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../../types/offers';
import {AppRoute} from '../../const';

export const changeCity = createAction<string>('ChangeCity');

export const setSortName = createAction<string>('SetSortName');

export const loadOffers = createAction<Offers>('LoadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadOffersNear = createAction<Offers>('data/loadOffersNear');

export const setError = createAction<string | null>('data/setError');

export const redirectToRoute = createAction<AppRoute | string>('page/redirectToRoute');
