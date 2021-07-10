import { RootState } from 'store/rootReducer';

export const getTagList = (state: RootState) => state.tags.list;
export const getSelectedTags = (state: RootState) => state.tags.selected;
