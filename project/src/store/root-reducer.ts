import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './name-space';
import dataReducer from './data/reducer';
import userProcess from './user-process/user-process';
import reviewsReducer from './reviews-process/reviews-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.Reviews]: reviewsReducer,
  [NameSpace.User]: userProcess,
});
