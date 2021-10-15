import { createAction } from '@reduxjs/toolkit';

export const changeSpecEntity = createAction(
  'specificationTable/changeSpecEntity',
  (id, propName, value) => ({
    payload: {
      id,
      propName,
      value
    }
  })
);

export const createGroup = createAction<string>(
  'specificationTable/createGroup'
);
