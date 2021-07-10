import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';

const getInvalid = (state: RootState) => state.table.invalid;
const getTableList = (state: RootState) => state.table.list;

export const getSortedTableList = createSelector(
  [getTableList, getInvalid],
  (list, invalid) => ({
    list: list.filter(({ visible }) => visible),
    invalid
  })
);

export const getCheckedPositions = createSelector(
  getSortedTableList,
  ({ list }) => list.map(({ check }) => check)
);

export const getOnlyCheckedPositions = createSelector(getTableList, list =>
  list.filter(({ check }) => check)
);
