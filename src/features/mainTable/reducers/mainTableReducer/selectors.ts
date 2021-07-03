import { createSelector } from 'reselect';
import { RootState } from 'store';

const getTableList = (state: RootState) => state.table.list;

export const getCheckedPositions = createSelector(getTableList, list =>
  list.map(({ check }) => check)
);

export const getOnlyCheckedPositions = createSelector(getTableList, list =>
  list.filter(({ check }) => check)
);
