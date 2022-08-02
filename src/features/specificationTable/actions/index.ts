import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { ValueType } from '../lib/middlewareHelper';

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

export const dropAction = createAction<
  PrepareAction<{ id: number; isGroupItem: boolean }>
>('specificationTable/dropAction', (id, isGroupItem) => ({
  payload: {
    id,
    isGroupItem
  }
}));

export const swapElements = createAction<
  PrepareAction<{ from: ValueType; to: ValueType }>
>('specificationTable/swapElements', (from, to) => ({
  payload: {
    from,
    to
  }
}));

export const removeFromList = createAction<number>(
  'specificationTable/removeFromList'
);

export const addToList = createAction<PrepareAction<ValueType>>(
  'specificationTable/addToList',
  obj => ({
    payload: obj
  })
);
