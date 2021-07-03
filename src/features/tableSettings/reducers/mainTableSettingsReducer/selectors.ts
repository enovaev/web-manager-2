import { createSelector } from 'reselect';
import { RootState } from 'store';

export const getTagList = (state: RootState) => state.tableSettings.tags;

export const getChooseColors = createSelector(getTagList, list =>
  Object.values(list).map(({ color }) => color)
);
