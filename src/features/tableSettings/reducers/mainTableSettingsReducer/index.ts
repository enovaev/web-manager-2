/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { createTag, deleteTag } from '../../actions/tagActions';

export type TagType = {
  id: number;
  name: string;
  color: string;
};

interface InitialStateType {
  tags: Record<number, TagType>;
}

const initialState = {
  tags: {}
} as InitialStateType;

export const tableSettingsReducer = createReducer(initialState, builder =>
  builder
    .addCase(createTag, (state, { payload }) => {
      const { id, name, color } = payload;
      state.tags[id] = { name, color, id };
    })
    .addCase(deleteTag, (state, { payload }) => {
      delete state.tags[payload];
    })
);
