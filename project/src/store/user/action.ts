import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setAuthorizationLogin = createAction<string>('user/setAuthorizationLogin');

export const redirectToRoute = createAction<AppRoute | string>('page/redirectToRoute');
