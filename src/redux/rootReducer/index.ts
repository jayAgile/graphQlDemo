import {combineReducers} from '@reduxjs/toolkit';
import {loginReducer} from '../slices/auth/authSlice';

export const rootReducer = combineReducers({
  auth: loginReducer,
});
