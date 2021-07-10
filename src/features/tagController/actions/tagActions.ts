import { createAction } from '@reduxjs/toolkit';

export const createTag = createAction('tags/createTag', (id, name, color) => ({
  payload: {
    id,
    name,
    color
  }
}));

export const deleteTag = createAction<number>('tags/deleteTag');

export const selectTag = createAction<number>('tags.selectTag');
