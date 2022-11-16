import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';

export const changeCity = createAction<string>('ChangeCity');

export const setSortName = createAction<string>('SetSortName');

export const loadOffers = createAction<Offers>('LoadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');
