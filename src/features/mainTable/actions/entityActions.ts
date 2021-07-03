import { createAction } from '@reduxjs/toolkit';

export const addPosition = createAction('table/addPosition');

export const changeEntity = createAction(
  'table/changeEntity',
  (index, propName, value) => ({
    payload: {
      index,
      propName,
      value
    }
  })
);

export const checkAllEntities = createAction<boolean>('table/checkAllEntities');
