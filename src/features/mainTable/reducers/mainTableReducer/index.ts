/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  selectTags,
  addPosition,
  changeEntity,
  deleteEntity,
  checkAllEntities
} from '../../actions/entityActions';
import { EntityType } from '../../types/reducerTypes';

interface TableState {
  list: EntityType[];
}

const initialPosition: EntityType = {
  check: false,
  partname: '',
  name: '',
  quantity: '1',
  price_value: '',
  price_currency: 'RUB',
  tags: []
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
    })
    .addCase(checkAllEntities, (state, { payload }) => {
      state.list = state.list.map(pos => ({ ...pos, check: payload }));
    })
    .addCase(deleteEntity, (state, { payload }) => {
      state.list = state.list.filter((_, i) => i !== payload);
    })
    .addCase(selectTags, (state, { payload }) => {
      state.list = state.list.map(pos =>
        pos.check ? { ...pos, tags: payload } : pos
      );
    });
});
