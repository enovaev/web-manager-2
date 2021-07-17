import { createAction } from '@reduxjs/toolkit';

export const calculatePosition = createAction<Record<number, object>>(
  'table/calculatePosition'
);
