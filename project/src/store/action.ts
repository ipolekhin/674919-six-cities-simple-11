import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('ChangeCity');

export const setSortName = createAction<string>('SetSortName');

export const loadOffers = createAction<Offers>('LoadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthorizationLogin = createAction<string>('user/setAuthorizationLogin');
