/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addPosition } from '../../actions';

type EntityType = {
  check: boolean;
  partname: string;
  option: string;
};

export type PropNamesType = keyof EntityType;

interface TableState {
  list: EntityType[];
}

const initialPosition: EntityType = {
  check: false,
  partname: '',
  option: ''
};

const initialState = {
  list: [initialPosition]
} as TableState;

export const mainTableReducer = createReducer(initialState, builder => {
  builder.addCase(addPosition, state => {
    state.list = [...state.list, initialPosition];
  });
});
