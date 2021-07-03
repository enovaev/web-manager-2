/* eslint-disable no-return-assign, no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { createTag } from '../../actions/tagActions';

type TagType = {
  name: string;
  color: string;
};

interface InitialStateType {
  tags: Record<string, TagType>;
}

const initialState = {
  tags: {}
} as InitialStateType;

export const tableSettingsReducer = createReducer(initialState, builder =>
  builder.addCase(createTag, (state, { payload }) => {
    const { id, name, color } = payload;
    state.tags[id] = { name, color };
  })
);
