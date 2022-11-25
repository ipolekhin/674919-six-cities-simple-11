import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setAuthorizationLogin,
} from './action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  login: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationLogin, (state, action) => {
      state.login = action.payload;
    });
});

export {userReducer};
