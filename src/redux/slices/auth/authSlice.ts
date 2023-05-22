import {createSlice} from '@reduxjs/toolkit';
import {StorageKey} from '~/constants/common';
// import {IAdmin} from '~/Types/Entity/AuthEntity';
import {LOGIN_S, LOGIN_F} from '~/constants/reducersTypes';
import {storeData} from '~/utils/AsyncStorageHelper';

export interface IAuthSlice {
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string;
  // userData: IAdmin | {};
}

const initialState: IAuthSlice = {
  isLoading: false,
  isLoggedIn: false,
  // userData: {},
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setToken: (state, payload) => {
      console.log('payload', payload);
      state.token = payload.payload;
    },
    logOut: state => {
      state.token = '';
    },
  },
});

export const {setToken, logOut} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
