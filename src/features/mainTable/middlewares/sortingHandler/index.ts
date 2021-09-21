import { selectTag, selectAllTag } from 'features/tagController';
import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import { setVisibleForSorting } from '../../actions/entityActions';

const actions = [selectTag, selectAllTag];

export const sortingHandler: Middleware<{}, RootState> =
  store => next => action => {
    next(action);
    if (actions.some(a => a.match(action))) {
      const { selected, selectAll } = store.getState().tags;
      store.dispatch(setVisibleForSorting({ selected, selectAll }));
    }
  };
