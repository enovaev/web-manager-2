/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import {
  selectTags,
  changeEntity,
  deleteEntity,
  checkAllEntities,
  addPositionPrepared,
  setVisibleForSorting
} from '../../actions/entityActions';
import { MainTableState, EntityType } from '../../types/interfaceState';

const initialPosition: EntityType = {
  id: 1,
  check: false,
  partname: '',
  name: '',
  quantity: '1',
  price_value: '',
  price_currency: 'RUB',
  price_end_value: '',
  price_end_currency: 'RUB',
  visible: true,
  tags: []
};

const initialState = {
  list: [initialPosition],
  invalid: false
} as MainTableState;

export const mainTableReducer = createReducer(initialState, builder => {
  builder
    .addCase(addPositionPrepared, (state, { payload }) => {
      const { id, tags } = payload;
      state.list = [...state.list, { ...initialPosition, id, tags }];
    })
    .addCase(changeEntity, (state, { payload }) => {
      const { id, propName, value } = payload;

      state.list = state.list.map(item =>
        item.id === id ? { ...item, [propName]: value } : item
      );
    })
    .addCase(checkAllEntities, (state, { payload }) => {
      state.list = state.list.map(pos =>
        pos.visible ? { ...pos, check: payload } : { ...pos, check: false }
      );
    })
    .addCase(deleteEntity, (state, { payload }) => {
      state.list = state.list.filter(({ id }) => id !== payload);
    })
    .addCase(selectTags, (state, { payload }) => {
      state.list = state.list.map(pos =>
        pos.check ? { ...pos, tags: payload } : pos
      );
    })
    .addCase(setVisibleForSorting, (state, { payload }) => {
      state.list = state.list.map(item => ({
        ...item,
        visible:
          (payload.length === 0 && item.tags.length === 0) ||
          item.tags.some(tag => payload.includes(tag))
      }));
    });
});
