import { createAction } from '@reduxjs/toolkit';

export const changeEntity = createAction(
  'table/changeEntity',
  (id, propName, value) => ({
    payload: {
      id,
      propName,
      value
    }
  })
);

export const checkAllEntities = createAction<boolean>('table/checkAllEntities');

export const deleteEntity = createAction<number>('table/deleteEntity');

export const selectTags = createAction<number[]>('table/selectTags');

interface VisibleForSortingType {
  selected: number[];
  selectAll: boolean;
}

export const setVisibleForSorting = createAction<VisibleForSortingType>(
  'table/setVisibleForSorting'
);

export const addPosition = createAction('table/addPosition');

export const addPositionPrepared = createAction(
  'table/addPositionPrepared',
  (id, tags) => ({ payload: { id, tags } })
);
