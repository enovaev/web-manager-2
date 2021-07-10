/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { createTag, deleteTag, selectTag } from '../../actions/tagActions';
import { TagControllerState } from '../../types/interfaceState';

const initialState = {
  list: {},
  selected: []
} as TagControllerState;

export const tagController = createReducer(initialState, builder =>
  builder
    .addCase(createTag, (state, { payload }) => {
      const { id, name, color } = payload;
      state.list[id] = { name, color, id };
    })
    .addCase(deleteTag, (state, { payload }) => {
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter(id => id !== payload);
      }
      delete state.list[payload];
    })
    .addCase(selectTag, (state, { payload }) => {
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter(id => id !== payload);
      } else state.selected = [...state.selected, payload];
    })
);
