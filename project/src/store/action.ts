import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('ChangeCity');

export const setSortName = createAction<string>('SetSortName');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setReviewRestStatus = createAction('review/setReviewRestStatus');

export const setError = createAction<string | null>('data/setError');
