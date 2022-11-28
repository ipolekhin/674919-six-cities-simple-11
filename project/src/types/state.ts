import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer, Offers} from './offers';

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
  error: string | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
