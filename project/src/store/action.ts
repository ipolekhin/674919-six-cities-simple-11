import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';
import {Reviews} from '../types/reviews';

export const changeCity = createAction<string>('ChangeCity');

export const setSortName = createAction<string>('SetSortName');

export const loadOffers = createAction<Offers>('LoadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadOffer = createAction<Offer>('data/loadOffer');

export const loadOffersNear = createAction<Offers>('data/loadOffersNear');

export const loadReviewsOfOffer = createAction<Reviews>('data/loadReviewsOfOffer');

export const setError = createAction<string | null>('data/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthorizationLogin = createAction<string>('user/setAuthorizationLogin');

export const sendFormReview = createAction<AppRoute | string>('data/sendFormReview');

export const redirectToRoute = createAction<AppRoute | string>('page/redirectToRoute');
