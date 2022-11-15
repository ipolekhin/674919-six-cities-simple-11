import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';

export const changeCity = createAction<string>('ChangeCity');

export const setOffers = createAction<Offers>('SetOffers');

export const setSortName = createAction<string>('SetSortName');
