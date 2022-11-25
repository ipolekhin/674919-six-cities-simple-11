import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../../const';
import {Reviews} from '../../types/reviews';

export const loadReviewsOfOffer = createAction<Reviews>('data/loadReviewsOfOffer');

export const sendFormReview = createAction<AppRoute | string>('data/sendFormReview');
