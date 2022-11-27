import {store} from '../store';
import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  login: string | undefined;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
