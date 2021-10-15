import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import { generateID } from 'shared/lib/generateID';
import { addPosition, addPositionPrepared } from '../../actions/entityActions';

export const addPositionHandler: Middleware<{}, RootState> =
  store => next => action => {
    if (addPosition.match(action)) {
      const { table, tags } = store.getState();
      return next(
        addPositionPrepared({
          id: generateID(table.list.map(({ id }) => id)),
          tags: tags.selected
        })
      );
    }
    return next(action);
  };
