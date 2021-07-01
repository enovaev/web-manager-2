/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { addPosition, changeEntity } from '../../actions/entityActions';
import { EntityType } from '../../types/reducerTypes';

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
  builder
    .addCase(addPosition, state => {
      state.list = [...state.list, initialPosition];
    })
    .addCase(changeEntity, (state, { payload }) => {
      const { index, propName, value } = payload;

      state.list[index] = { ...state.list[index], [propName]: value };
    });
});
