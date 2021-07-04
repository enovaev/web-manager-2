import { createAction } from '@reduxjs/toolkit';

export const createTag = createAction(
  'tableSettings/createTag',
  (id, name, color) => ({
    payload: {
      id,
      name,
      color
    }
  })
);

export const deleteTag = createAction<string>('tableSettings/deleteTag');
