import { createAction, PrepareAction } from '@reduxjs/toolkit';

export const changeSpecEntity = createAction<
  PrepareAction<{ id: number; propName: string; value: string }>
>('specificationTable/changeSpecEntity', (id, propName, value) => ({
  payload: {
    id,
    propName,
    value
  }
}));

export const createGroup = createAction<string>(
  'specificationTable/createGroup'
);

export const swapElements = createAction<number>(
  'specificationTable/swapElements'
);
