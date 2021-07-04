import { createSelector } from 'reselect';
import { RootState } from 'store';

export const getTagList = (state: RootState) => state.tableSettings.tags;
export const getTagListArr = createSelector(getTagList, tags =>
  Object.values(tags)
);
