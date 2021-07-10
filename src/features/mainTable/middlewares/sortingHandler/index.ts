import { selectTag } from 'features/tagController';
import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import { setVisibleForSorting } from '../../actions/entityActions';

export const sortingHandler: Middleware<{}, RootState> =
  store => next => action => {
    next(action);
    if (selectTag.match(action)) {
      const { selected } = store.getState().tags;
      store.dispatch(setVisibleForSorting(selected));
    }
  };
