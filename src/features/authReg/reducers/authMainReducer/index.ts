/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { loginUser } from '../../actions/authAction';
import { AuthRegState } from '../../types/interfaceState';

const initialState = {
  isAuth: false
} as AuthRegState;

export const authMainReducer = createReducer(initialState, builder => {
  builder.addCase(loginUser, state => {
    state.isAuth = true;
  });
});
