import { createAction } from '@reduxjs/toolkit';

export const createTag = createAction(
  'tableSettings/tags',
  (id, name, color) => ({
    payload: {
      id,
      name,
      color
    }
  })
);
