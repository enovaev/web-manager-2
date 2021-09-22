/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { changeSettingEntity, calculatePosition } from 'features/settingsTable';
import {
  assignTags,
  changeEntity,
  deleteEntity,
  checkAllEntities,
  deletePositionTag,
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
  price_value: '300',
  price_currency: 'RUB',
  price_end_value: '',
  price_end_currency: 'RUB',
  price_in_value: '',
  price_in_currency: 'RUB',
  profit_value: '',
  profit_currency: 'RUB',
  delivery: '0',
  cus_house: '0',
  nds: '0',
  discount: '0',
  sale: '0',
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
    .addCase(setVisibleForSorting, (state, { payload }) => {
      const { selectAll, selected } = payload;
      state.list = state.list.map(item => ({
        ...item,
        visible:
          selectAll ||
          (!selected.length && !item.tags.length) ||
          item.tags.some(tag => selected.includes(tag))
      }));
    })
    .addCase(changeSettingEntity, (state, { payload }) => {
      const { propName, value } = payload;

      state.list = state.list.map(item =>
        item.visible ? { ...item, [propName]: value } : item
      );
    })
    .addCase(calculatePosition, (state, { payload }) => {
      state.list = state.list.map(item =>
        payload[item.id] ? { ...item, ...payload[item.id] } : item
      );
    })
    .addCase(assignTags, (state, { payload }) => {
      state.list = state.list.map(pos =>
        pos.check ? { ...pos, tags: payload } : pos
      );
    })
    .addCase(deletePositionTag, (state, { payload }) => {
      state.list = state.list.map(pos => ({
        ...pos,
        tags: pos.tags.filter(id => id !== payload)
      }));
    });
});
