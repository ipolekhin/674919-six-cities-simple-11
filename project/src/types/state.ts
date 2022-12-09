import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer, Offers} from './offers';
import {Reviews} from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  login: string | undefined;
};

export type Data = {
  city: string;
  offer: Offer | null;
  offers: Offers;
  offersNear: Offers;
  sortName: string;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  error: string | null;
};

export type ReviewsProcess = {
  isReviewsLoading: string;
  reviewsOfOffer: Reviews;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
