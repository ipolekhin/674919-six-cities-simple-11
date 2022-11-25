import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './name-space';
import {dataReducer} from './data/reducer';
import {userReducer} from './user/reducer';
import {reviewsReducer} from './reviews/reducer';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataReducer,
  [NameSpace.Reviews]: reviewsReducer,
  [NameSpace.User]: userReducer,
});
