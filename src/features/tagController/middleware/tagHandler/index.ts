import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import { deletePositionTag } from 'features/mainTable';
import { deleteTag } from '../../actions/tagActions';

export const tagHandler: Middleware<{}, RootState> =
  store => next => action => {
    if (deleteTag.match(action)) {
      store.dispatch(deletePositionTag(action.payload));
    }
    next(action);
  };
