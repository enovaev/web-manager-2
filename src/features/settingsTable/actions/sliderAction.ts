import { createAction } from '@reduxjs/toolkit';

export const changeSettingEntity = createAction(
  'table/changeSliderParams',
  (propName, value) => ({
    payload: {
      propName,
      value
    }
  })
);
